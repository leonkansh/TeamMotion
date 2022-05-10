import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import GoalsInputGroup from './GoalsInputGroup';
import Stack from '@mui/material/Stack';
import HeaderBarBackArrow from '../nav/HeaderBarBackArrow'
import './Meeting.css';

export default function Goal() {
    const history = useHistory()
    const { orgid, teamid } = useParams();
    const teambasePath = `/orgs/${orgid}/teams/${teamid}/teambase`;
    const [goals, setGoals] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [num, setNum] = React.useState(goals.length);
    console.log("goal.js", goals);
    const loadGoals = async () => {
        await fetch(`https://tadashi-srv.herokuapp.com/api/charters/${orgid}/${teamid}/single?name=Goals`, {
                credentials: 'include'
            })
            .then(res => res.json())
            .then(receivedPosts => {
                setGoals(receivedPosts.data[0].goals);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }
    React.useEffect(() => {
        loadGoals();
    }, []);

    const addGoal = (e) => {
        e.preventDefault();
        let data = goals;
        data.push(null);
        setGoals(data);
        setNum(num + 1);
    }

    const saveGoal = async (e) => {
        e.preventDefault();
        const body = { name: "Goals", goals: goals }
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
                    <HeaderBarBackArrow screenname="Team Goals" />
                    <Stack>
                        {goals.map((goal, index) => {
                            return (
                                <GoalsInputGroup
                                    goals={goals}
                                    setGoals={setGoals}
                                    goal={goal}
                                    index={index}
                                />
                            )
                        })}
                        <div className='group-btns'>
                            <button className="btn-add-more" onClick={addGoal}>Add Goal</button>                            
                            <button className="btn-save" onClick={saveGoal}>Save</button>
                        </div>
                    </Stack>
                </div>
            )}
        </div>
    )
}