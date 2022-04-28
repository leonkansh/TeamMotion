import React from 'react';
import { Paper } from '@mui/material';
import '@fontsource/poppins';

function Message(msg) {
    console.log(msg)
    // #B7B8E7 - Side 10px || #FF8F4A
    // #A7ADFF - Backing || #FFEDE2
    let flagStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        minHeight: '100px'
    };
    let flagStyleBar = {
        width: '10px',
    }
    switch(msg.flag) {
        case 1:
            flagStyle.backgroundColor = 'rgba(167, 173, 255, .3)';
            flagStyleBar.backgroundColor = '#B7B8E7';
            break;
        case 2:
            flagStyle.backgroundColor = '#FFEDE2';
            flagStyleBar.backgroundColor = '#FF8F4A';
            break;
    }
    return (
        <div style={flagStyle} key={msg._id}>
            <div style={flagStyleBar}></div>
            <div style={{
                height: '50px',
                width: '50px',
                backgroundColor: '#EFEFEF',
                borderRadius: '50%',
                marginTop: '20px',
                marginLeft: '17px',
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
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: 14
                    }}>{msg.sender.displayName}</p>
                    <p style={{
                        color: '#808191',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: 12,
                        marginLeft: '22px'
                    }}>{new Date(msg.date).toLocaleTimeString('en-US')}</p>
                </div>
                <div style={{
                    maxWidth: '75vw'
                }}>
                    <p style={{
                        marginTop: 0,
                        paddingTop: 0,
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: 14
                    }}>{msg.content}</p>
                </div>
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
        <Paper elevation={0} sx={{
            marginTop: 1,
            marginBottom: 10,
            width: '100vw',
            height: 'calc( 100% - 80px )',
            overflowY: 'scroll'
        }}>
            {data}
        </Paper>
    );
}