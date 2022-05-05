import React from "react";
import { House } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { PencilSimple } from "phosphor-react";
import "./HeaderBar.css";
import Popup from "reactjs-popup";

/**
 * @teamname { team name passed as string in a prop }
 * @returns Rendering a house icon to go home screen and click to edit team name
 */
export default function HeaderBarTeambase() {
  const { orgid, teamid } = useParams();
  const [name, setName] = React.useState();

  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const loadName = async (e) => {
    await fetch(`http://localhost:3000/api/org/${orgid}/team/${teamid}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((receivedData) => {
        setName(receivedData.teams[0].name);
        setIsLoaded(true);
      })
      .catch((e) => console.log("load team name error", e));
  };
  React.useEffect(() => {
    loadName();
  }, []);

  const saveName = async () => {
    const body = { teamName: name };
    await fetch(`http://localhost:3000/api/org/${orgid}/team/${teamid}`, {
      credentials: "include",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch(e => console.log(e));
    closeModal();
  };

  const btnHomeStyle = {
    paddingLeft: "20px",
    position: "absolute",
  };

  return (
    <div className="header-1-container">
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && (
        <div>
          <Link className="btn-home" to="/" style={btnHomeStyle}>
            <House size={35} color="#383E56" />
          </Link>
          <div className="header-title">
            <p className="p-teamname">{name}</p>
            <button
              type="button"
              className="btn-edit-name"
              onClick={() => setOpen((o) => !o)}
            >
              <PencilSimple size={25} color="#C4C4C4" />
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal">
                <a className="close" onClick={closeModal}>
                  &times;
                </a>
                <p>Enter your team name</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button onClick={saveName}>Save</button>
              </div>
            </Popup>
          </div>
        </div>
      )}
    </div>
  );
}
