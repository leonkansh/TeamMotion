import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import { ArrowCircleUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import '@fontsource/poppins';

export default function TextBox(props) {
    const [text, setText] = useState("");

    return (
        <div
            style={{
                position: 'fixed',
                width: '100%',
                bottom: '56px',
                height: '74px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                height: '45px',
                width: '90vw',
                border: '1.5px solid #A3A3A5',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                <TextField
                    id='chat-input-field'
                    value={text}
                    variant="standard"
                    placeholder='Message...'
                    onChange={t => setText(t.target.value)}
                    sx={{
                        width:'70vw',
                        marginRight: '15px'
                    }}
                />
                <IconButton onClick={e => {
                    e.preventDefault();
                    props.sendMsg(text);
                    setText("");
                }}>
                    <ArrowCircleUp color='secondary'
                        sx={{fontSize:'32px'}} />
                </IconButton>
            </div>
        </div>
    );
}