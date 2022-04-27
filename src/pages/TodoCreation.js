import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import BottomNavBar from '../components/nav/BottomNavbar';

export default function TodoCreation() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const [todo_content, setTodoName] = React.useState('');
    const [selected_assignment, setSelectedAssignment] = React.useState({ id: "", name: "" });
    const [todo_due, setTodoDue] = React.useState();
    const [assignee, setAssignee] = React.useState({ id: "", name: "" });

    const handleTodo = (event) => {
        setTodoName(event.target.value);
    }

    const handleAssignment = (event) => {
        const name = event.target.value;
        const id = assignments.find(item => item.name === name)._id
        setSelectedAssignment({ id, name });
    }

    const handleAssignee = (event) => {
        const name = event.target.value;
        const id = members.find(item => item.displayName === name)._id._id;
        setAssignee({ id, name });
    }

    const handleDate = (event) => {
        const date = new Date(event.target.value);
        setTodoDue(date);
    }

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [assignments, setAssignments] = React.useState([]);
    const [[...members], setMembers] = React.useState('');

    // get assignment list from api : names & due dates
    const loadAssignments = async () => {
        await fetch("http://localhost:3000/api/assignments/6263d2fb17033b23e05c0401/team/1")
            .then(res => res.json())
            .then(receivedData => {
                setAssignments(receivedData);
                setIsLoaded(true); // FIXME: await both assignment and member's async responses
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }

    // get team member list from api : names
    const loadMembers = async () => {
        await fetch("http://localhost:3000/api/org/6263d2fb17033b23e05c0401/team/1")
            .then(res => res.json())
            .then(receivedData => {
                setMembers(receivedData.teams[0].members);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }

    // post a new todo to api
    const postTodo = () => {
        const todo = { content: todo_content, date: todo_due, assignedId: assignee.id, assignedName: assignee.name };
        fetch(`http://localhost:3000/api/assignments/6263d2fb17033b23e05c0401/${selected_assignment.id}/team/1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
    }

    React.useEffect(() => {
        loadAssignments();
        loadMembers();
    }, []);

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
                    <Stack
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { mt: 5, width: '25ch' },
                            pl: 5,
                            pt: 3,
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Input
                            placeholder="To-Do Name"
                            sx={{ mt: 5, color: "purple", fontSize: 24, maxWidth: 300 }}
                            onChange={handleTodo}
                        />

                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Assignments"
                            value={selected_assignment.name}
                            onChange={handleAssignment}
                            helperText="Please select an assignment"
                        >
                            {assignments.map((option) => (
                                <MenuItem key={option.name} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="date"
                            label="Done by"
                            type="date"
                            sx={{ minWidth: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDate}
                        />

                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Assignee"
                            value={assignee.name}
                            onChange={handleAssignee}
                            helperText="Please select a member"
                            sx={{ mb: 15 }}
                        >
                            {members.map((option) => (
                                <MenuItem key={option.displayName} value={option.displayName}>
                                    {option.displayName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Button
                        href="/tasks"
                        variant="contained"
                        sx={{ position: "relative", bottom: 80, left: 230 }}
                        onClick={postTodo}
                    >
                        Add To-do
                    </Button>
                    <BottomNavBar />
                </div>
            )}
        </div>
    );
}