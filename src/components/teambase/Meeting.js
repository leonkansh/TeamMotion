import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MeetingsInputGroup from './MeetingsInputGroup';
import Stack from '@mui/material/Stack';
import HeaderBarBackArrow from '../nav/HeaderBarBackArrow'
import './Meeting.css';

export default function Meeting() {
    const history = useHistory()
    const { orgid, teamid } = useParams();
    const teambasePath = `/orgs/${orgid}/teams/${teamid}/teambase`;
    const [meetings, setMeetings] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [num, setNum] = React.useState(meetings.length);

    const loadMeetings = async () => {
        await fetch(`https://tadashi-srv.herokuapp.com/api/charters/${orgid}/${teamid}/single?name=Meeting Times`,{
                credentials: 'include'
            })
            .then(res => res.json())
            .then(receivedPosts => {
                setMeetings(receivedPosts.data[0].meetingTimes);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }
    React.useEffect(() => {
        loadMeetings();
    }, []);

    const addMeeting = (e) => {
        e.preventDefault();
        let data = meetings;
        data.push({
            name: null,
            weekday: null,
            start: null,
            end: null
        });
        setMeetings(data);
        setNum(num + 1);
    }

    const saveMeeting = async (e) => {
        e.preventDefault();
        const body = { name: "Meeting Times", meetingTimes: meetings }
        await fetch(`https://tadashi-srv.herokuapp.com/api/charters/${orgid}/${teamid}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).catch(e => console.log("error", e));
        history.push(teambasePath);
    }

    return (
        <div>
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
                    <HeaderBarBackArrow screenname="Meeting Times" />
                    <Stack>
                        {meetings.map((meeting, index) => {
                            return (
                                <MeetingsInputGroup
                                    meetings={meetings}
                                    setMeetings={setMeetings}
                                    meeting={meeting}
                                    index={index}
                                />
                            )
                        })}
                        <div className='group-btns'>
                            <button className="btn-add-more" onClick={addMeeting}>Add Meeting Time</button>                            
                            <button className="btn-save" onClick={saveMeeting}>Save</button>
                        </div>
                    </Stack>
                </div>
            )}
        </div>
    )
}