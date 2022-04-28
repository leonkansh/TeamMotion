import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';

export default function Summary() {

    const location = useLocation();
    const userData = location.state;
    console.log(userData)

    return (
        <div>
            <HeaderBar />
            Summary page
            <BottomNavBar userData={userData}/>
        </div>
    )
}