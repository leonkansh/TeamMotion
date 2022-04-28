import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import { Divider } from '@mui/material';
import { Plus } from "phosphor-react";
import './Teambase.css'

export default function Teambase() {
    const { orgid, teamid } = useParams();
    const meetingPath = `/orgs/${orgid}/teams/${teamid}/teambase/meetings`;

    return (
        <div className='container'>
            <HeaderBar screenname="TeamBase" />
            
            <div>
                <h3>Meeting Times</h3>
                <Divider/>
                <Link to={meetingPath}>
                    <div
                        className="btn-add"
                        onClick={(e) => console.log("clicked")}
                    >
                        <Plus size={24} color="#4B369D"/>
                    </div>
                </Link>
            </div>
            
            <h3>Team Goals</h3>
            <Divider/>

            <h3>Emails</h3>
            <Divider/>

            <BottomNavBar />
        </div>
    )
}