import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

/** TODO: refactor post creation for add/edit meeting */
/** TODO: Fetch get all meetings, if nothing, header add, else, header edit */
export default function Meeting() {
    const header = "Add Meeting";

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [date, setDate] = React.useState(new Date());

    const postData = () => {
        setDate(new Date());
        const post = { title, content, date };
        fetch("http://localhost:3000/api/board/6263d2fb17033b23e05c0401/1", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
    }

    return (
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
            <h1>{header}</h1>
            <Stack>
                <TextField
                    placeholder="title"
                    value={title}
                    sx={{ fontSize: 24, maxWidth: 300, p: 1, pb: 3 }}
                    onChange={event => setTitle(event.target.value)}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Enter your reflection"
                    multiline
                    rows={4}
                    sx={{ p: 1 }}
                    value={content}
                    onChange={event => setContent(event.target.value)}
                />

                <Button href="/reflections" variant="contained" onClick={e => postData()}>Post</Button>
            </Stack>
        </div>
    )
}