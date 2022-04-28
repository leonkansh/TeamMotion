import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import { Divider } from '@mui/material';
import { Plus } from "phosphor-react";
import './Teambase.css'
import MeetingCard from '../components/teambase/MeetingCard';

const domain = "localhost:3000";
const orgid = "6263d2fb17033b23e05c0401";
const teamid = "1";

export default function Teambase() {
    const meetingPath = "/teambase/meetings";

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [meetings, setMeetings] = React.useState([]);
    const [profiles, setProfiles] = React.useState([]);
    const [goals, setGoals] = React.useState([]);

    const loadPosts = async () => {
        await fetch(`http://${domain}/api/charters/${orgid}/${teamid}`)
            .then(res => res.json())
            .then(receivedPosts => {
                receivedPosts.data.forEach(data => {
                    if (data.meetingTimes) setMeetings(data.meetingTimes)
                    else if (data.profile) setProfiles(data.profile)
                    else if (data.goals) setGoals(data.goals)
                })
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }
    React.useEffect(() => {
        // fetch meeting times from api
        loadPosts();
    }, []);

    return (
        <div className='container'>
            <HeaderBar screenname="TeamBase" />
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
                    <div className='rows'>
                        <h3 className='row'>Meeting Times</h3>
                        {meetings.length > 0 && (<button className='row'>Edit</button>)}
                    </div>
                    <Divider/>
                    {meetings.length < 1 ? (
                        <Link to={meetingPath}>
                            <div className="btn-add">
                                <Plus size={24} color="#4B369D"/>
                            </div>
                        </Link>
                    ) : (
                        <div className='meeting-list'>
                            {meetings.map(meeting => <MeetingCard meeting={meeting}/>)}
                        </div>
                    )}
                    
                    <h3>Team Goals</h3>
                    <Divider/>

                    <h3>Emails</h3>
                    <Divider/>

                    <BottomNavBar />
                </div>
            )}
        </div>
    )
}
