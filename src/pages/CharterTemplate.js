import React from 'react';
// import HeaderBar from '../components/nav/HeaderBar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNavBar from '../components/nav/BottomNavbar';
import CharterList from '../components/charters-page/CharterList';
import { useHistory, useLocation } from 'react-router-dom';


export default function CharterTemplate({ data_list }) {
    // const [isLoaded, setIsLoaded] = React.useState(false);
    const [charters, setCharters] = React.useState([]);

    // const loadCharters = async () => {
    //     await fetch("http://localhost:3000/api/charters/621d26f81a997588eb8b7979/1")
    //         .then(res => res.json())
    //         .then(receivedCharters => {
    //             setCharters(receivedCharters);
    //             setIsLoaded(true);
    //         })
    //         .catch(error => {
    //             setIsLoaded(false);
    //             console.log("load data error:", error);
    //         })
    // }

    const location = useLocation();
    const { data } = location.state;
    if (!data_list) {
        data_list = data;
        console.log("data_list", data_list);
    }

    React.useEffect(() => {
        // loadCharters();
        setCharters(data_list);
    }, []);

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    // console.log("data: ", data_list);
    return (
        // <div>
        //     {!isLoaded && <p>Loading...</p>}
        //     {isLoaded && (
        <div>
            {/* TODO: add home/arrow switch in HeaderBar */}
            {/* <HeaderBar screenname="Charter Template"/> */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2, color: "primary.main", left: 22, top: 23 }}
                onClick={goBack}
            >
                <ArrowBackIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <CharterList name="charter templates" data_list={charters} />
            <BottomNavBar />
        </div>
        //     )}
        // </div>
    )
}