import React from 'react';
import { Paper } from '@mui/material';
import { borderRadius } from '@mui/system';

function Message(msg) {
    console.log(msg)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }}>
            <div style={{
                height: '50px',
                width: '50px',
                backgroundColor: '#EFEFEF',
                borderRadius: '50%',
                marginTop: '20px',
                marginRight: '15px'
            }}>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <p style={{
                        color: '#4B369D',
                        font: '700 14 Poppins, sans-serif'
                    }}>{msg.sender.name}</p>
                    <p style={{
                        color: '#808191',
                        font: '500 12 Poppins, sans-serif',
                        marginLeft: 100
                    }}>{new Date(msg.date).toLocaleTimeString('en-US')}</p>
                </div>
                <p>{msg.content}</p>
            </div>
        </div>
    );
}

export default function Messages(props) {
    const data = []
    props.msgData.forEach(msg => {
        data.push(Message(msg));
    })
    
    return (
        <Paper elevation='0' sx={{
            marginTop: 1,
            marginBottom: 10,
            width: 1,
            height: 'calc( 100% - 80px )',
            overflowY: 'scroll'
        }}>
            {data}
        </Paper>
    );
}