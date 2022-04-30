import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import { Divider } from '@mui/material';
import { Plus, PencilSimple } from "phosphor-react";
import './Teambase.css'
import MeetingCard from '../components/teambase/MeetingCard';
import GoalCard from '../components/teambase/GoalCard';
import EmailCard from '../components/teambase/EmailCard';

export default function Teambase() {
    const { orgid, teamid } = useParams();
    const meetingPath = `/orgs/${orgid}/teams/${teamid}/teambase/meetings`;

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [meetings, setMeetings] = React.useState([]);
    const [profiles, setProfiles] = React.useState([]);
    const [goals, setGoals] = React.useState([]);

    const loadCharters = async () => {
        await fetch(`http://localhost:3000/api/charters/${orgid}/${teamid}`)
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
        loadCharters();
    }, []);

    return (
        <div className='container'>
            <HeaderBar screenname="TeamBase" />
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
                    <div className='section-break'>
                        <h3>Meeting Times</h3>
                        {meetings.length > 0 && (
                            <Link className="btn-edit" to={meetingPath}><PencilSimple size={30} color='#4B369D' /></Link>
                        )}
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
                    {goals.length < 1 ? (
                        <Link to={meetingPath}>
                            <div className="btn-add">
                                <Plus size={24} color="#4B369D"/>
                            </div>
                        </Link>
                    ) : (
                        <div className='meeting-list'>
                            {goals.map(goal => <GoalCard goal={goal}/>)}
                        </div>
                    )}

                    <h3>Emails</h3>
                    <Divider/>
                    {profiles.length < 1 ? (
                        <Link to={meetingPath}>
                            <div className="btn-add">
                                <Plus size={24} color="#4B369D"/>
                            </div>
                        </Link>
                    ) : (
                        <div className='meeting-list'>
                            {profiles.map(contact => <EmailCard contact={contact}/>)}
                        </div>
                    )}

                    <BottomNavBar />
                </div>
            )}
        </div>
    )
}
