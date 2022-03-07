import React from 'react';
import HeaderBar from '../components/HeaderBar';
import BottomNavBar from '../components/BottomNavbar';
import CharterList from '../components/CharterList';


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