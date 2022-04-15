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
        await fetch("http://localhost:3000/api/charters/621d26f81a997588eb8b7979/1")
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

    const data = [
        {
            name: "Make your own Charter",
            content: "What are some things that all members want to agree on that will help in your team work?"
        }
    ]

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
                    <CharterList name="Charters" data_list={charters} />
                    <BottomNavBar />
                </div>
            )}
        </div>
    )
}