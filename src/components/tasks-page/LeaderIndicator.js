import React from "react";
import { AssignmentContext } from "../../pages/AssignmentContext";
import './LeaderIndicator.css'

export default function LeaderIndicator() {
    const value = React.useContext(AssignmentContext);
    const leader = value.data.find(item => item._id == value.assignment_id).leader;
    
    const [self, setSelf] = React.useState();
    const [isLoaded, setIsLoaded] = React.useState(false);

    const getSelf = async () => {
      await fetch("https://tadashi-srv.herokuapp.com/api/users/self", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then(receivedData => {
            setSelf(receivedData);
            setIsLoaded(true);
        })
        .catch((error) => {
          setIsLoaded(false);
          console.log("get self error:", error);
        });
    };
    React.useEffect(() => {
        getSelf();
    }, []);

    return (
      <div>
        {!isLoaded && <p>Loading...</p>}
        {isLoaded && (
          <div>
            {leader._id === self._id && (
              <div className="leader-bar">
                You are the lead for this assignment :D
              </div>
            )}
          </div>
        )}
      </div>
    );
}
