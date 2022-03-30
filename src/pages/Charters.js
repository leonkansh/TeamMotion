import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import CharterList from '../components/charters-page/CharterList';


export default function Charters() {
    return (
        <div>
            <HeaderBar />
            Charters page
            {/* TODO: team pictures (horizontal scroll) */}
            <CharterList />
            <BottomNavBar />
        </div>
    )
}