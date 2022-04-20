import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import { ArrowCircleUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function TextBox(props) {
    const [text, setText] = useState("");

    return (
        <div
            style={{
                position: 'fixed',
                width: '100%',
                bottom: '56px',
                backgroundColor: '#FFFFFF'
            }}
        >
            <TextField
                id='chat-input-field'
                value={text}
                placeholder='Message...'
                onChange={t => setText(t.target.value)}
            />
            <IconButton onClick={e => {
                e.preventDefault();
                props.sendMsg(text);
                setText("");
            }}>
                <ArrowCircleUp color='secondary' />
            </IconButton>
        </div>
    );
}