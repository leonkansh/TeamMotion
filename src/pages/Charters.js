import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import CharterList from '../components/charters-page/CharterList';
import AddButton from '../components/common/AddButton';
import { Link } from 'react-router-dom';

export default function Charters() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [charters, setCharters] = React.useState([]);

    const loadCharters = async () => {
        await fetch("http://localhost:3000/api/charters/6263d2fb17033b23e05c0401/1")
            .then(res => res.json())
            .then(receivedCharters => {
                setCharters(receivedCharters);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }
    React.useEffect(() => {
        loadCharters();
    }, []);

    const data = require("./charter-templates.json");

    const charterTemplatePath = "/charters/charter-templates";

    return (
        <div>
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
                    <HeaderBar screenname="Charter" />
                    <Link to={{
                        pathname: charterTemplatePath,
                        state: {
                            data: data
                        },
                    }}>Link Text</Link>
                    <AddButton path={charterTemplatePath} />
                    <CharterList name="Charters" data_list={charters.data} />
                    <BottomNavBar />
                </div>
            )}
        </div>
    )
}