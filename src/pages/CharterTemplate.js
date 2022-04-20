import React from 'react';
// import HeaderBar from '../components/nav/HeaderBar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNavBar from '../components/nav/BottomNavbar';
import CharterTemplateList from '../components/charters-page/CharterTemplateList';
import { useHistory, useLocation } from 'react-router-dom';


export default function CharterTemplate({ data_list }) {
    const [charters, setCharters] = React.useState([]);

    const location = useLocation();
    const { data } = location.state;
    if (!data_list) {
        data_list = data;
    }

    React.useEffect(() => {
        setCharters(data_list);
    }, []);

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return (
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
            <CharterTemplateList name="charter templates" data_list={charters} />
            <BottomNavBar />
        </div>
    )
}