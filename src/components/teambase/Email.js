import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EmailsInputGroup from './EmailsInputGroup';
import Stack from '@mui/material/Stack';
import HeaderBarBackArrow from '../nav/HeaderBarBackArrow'
import './Meeting.css';

export default function Email() {
    const history = useHistory()
    const { orgid, teamid } = useParams();
    const teambasePath = `/orgs/${orgid}/teams/${teamid}/teambase`;
    const [profiles, setProfiles] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [num, setNum] = React.useState(profiles.length);

    const loadProfiles = async () => {
        await fetch(`http://localhost:3000/api/charters/${orgid}/${teamid}/single?name=Profile`)
            .then(res => res.json())
            .then(receivedPosts => {
                setProfiles(receivedPosts.data[0].profile);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }
    React.useEffect(() => {
        loadProfiles();
    }, []);

    const addEmail = (e) => {
        e.preventDefault();
        let data = profiles;
        data.push({
            name: null,
            email: null
        });
        setProfiles(data);
        setNum(num + 1);
    }

    const saveEmail = async (e) => {
        e.preventDefault();
        const body = { name: "Profile", profile: profiles }
        fetch(`http://localhost:3000/api/charters/${orgid}/${teamid}`, {
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
                    <HeaderBarBackArrow screenname="Emails" />
                    <Stack>
                        {profiles.map((profile, index) => {
                            return (
                                <EmailsInputGroup
                                    profiles={profiles}
                                    setProfiles={setProfiles}
                                    profile={profile}
                                    index={index}
                                />
                            )
                        })}
                        <div className='group-btns'>
                            <button className="btn-add-more" onClick={addEmail}>Add Email</button>                            
                            <button className="btn-save" onClick={saveEmail}>Save</button>
                        </div>
                    </Stack>
                </div>
            )}
        </div>
    )
}