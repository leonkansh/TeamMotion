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
                marginTop: '15px',
                marginRight: '15px'
            }}>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <p style={{
                        color: '#4B369D',
                        font: '400 14em Poppins, sans-serif'
                    }}>{msg.sender.name}</p>
                    <p style={{
                        color: '#808191',
                        font: '200 12em Poppins, sans-serif'
                    }}>{msg.date}</p>
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
        <Paper sx={{
            marginBottom: 10,
            height: 'calc( 100% - 80px )',
            overflowY: 'scroll'
        }}>
            {data}
        </Paper>
    );
}