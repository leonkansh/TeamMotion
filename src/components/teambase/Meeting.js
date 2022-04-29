import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import './Meeting.css';
import InputGroup from './InputGroup';

export default function Meeting() {
    const header = "Add Meeting";
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const { orgid, teamid } = useParams();
    const [meetings, setMeetings] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [num, setNum] = React.useState(meetings.length);

    const loadMeetings = async () => {
        await fetch(`http://localhost:3000/api/charters/${orgid}/${teamid}/single?name=Meeting Times`)
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
        fetch(`http://localhost:3000/api/charters/${orgid}/${teamid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).catch(e => console.log("error", e));
    }

    return (
        <div>
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
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

                    <Stack>
                        {meetings.map((meeting, index) => {
                            return (
                                <InputGroup
                                    meetings={meetings}
                                    setMeetings={setMeetings}
                                    meeting={meeting}
                                    index={index}
                                />
                            )
                        })}

                        <button onClick={addMeeting}>Add Meeting Time</button>

                        <Link to={`/orgs/${orgid}/teams/${teamid}/teambase`}>
                            <button onClick={saveMeeting}>Save</button>
                        </Link>
                    </Stack>
                </div>
            )}
        </div>
    )
}