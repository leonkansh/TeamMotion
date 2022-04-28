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

    /** TODO: store meeting_obj_list as useState : update entire list everytime */
    const [meetings, setMeetings] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

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

    const addMeeting = () => {
        // TODO:
        // setMeetings(data + data.push(placeholder))
        // so it renders a new InputGroup with placeholder
    }

    const saveMeeting = () => {
        // TODO: 
        // revert start and end time
        // call POST api
        // route to Teambase
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
                                    setMeetings={setMeetings}
                                    meeting={meeting}
                                    index={index}
                                />
                            )
                        })}
                        
                        {/* addMeeting */}
                        <button>Add Meeting Time</button>

                        {/* saveMeeting */}
                        <Link to={`/orgs/${orgid}/teams/${teamid}/teambase`}>
                            <button onClick={e => console.log("post and go back")}>Save</button>
                        </Link>
                    </Stack>
                </div>
            )}
        </div>
    )
}