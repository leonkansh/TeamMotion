import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CharterCreation() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const location = useLocation();
    const { data } = location.state;

    const [name, setName] = React.useState("");
    const [content, setContent] = React.useState("");

    const postData = () => {
        const post = { name, content };
        fetch("http://localhost:3000/api/charters/6263d2fb17033b23e05c0401/1", {
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

            <Stack>
                <TextField
                    placeholder={data.name}
                    value={name}
                    sx={{ fontSize: 24, maxWidth: 300, p: 1, pb: 3 }}
                    onChange={event => setName(event.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    placeholder={data.content + "\n\n" + data.example}
                    multiline
                    rows={8}
                    sx={{ p: 1 }}
                    value={content}
                    onChange={event => setContent(event.target.value)}
                />

                <Button href="/charters" variant="contained" onClick={e => postData()}>Post</Button>
            </Stack>
        </div>
    )
}