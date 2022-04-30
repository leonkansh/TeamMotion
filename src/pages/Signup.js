import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import '@fontsource/poppins';

export default function Signup() {
    const history = useHistory();
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    function attemptSignup() {
        if(first == '' || last == '' || email == '' || password == '' || confirm == '') {
            console.log('fields required');
        } else if (password != confirm) {
            console.log('passwords must match');
        } else {
            fetch('http://localhost:3000/login/signup', {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: `${first} ${last}`
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'success') {
                    console.log('successfully created');
                    history.push('/home');
                } else {
                    console.log('something went wrong')
                }
            })
            .catch(error => console.log('login error', error));
        }
    }

    const styleInput1 = {
        width: '175px',
        height: '50px',
        background: '#FFFFFF',
        border: '1px solid #4B369D',
        boxSizing: 'border-box',
        borderRadius: '15px',
        fontFamily: 'Poppins, sans-serif',
        color: '#4B369D'
    }
    const styleInput2 = {
        width: '362px',
        height: '50px',
        marginLeft: '29px',
        marginTop: '6px',
        background: '#FFFFFF',
        border: '1px solid #4B369D',
        boxSizing: 'border-box',
        borderRadius: '15px',
        fontFamily: 'Poppins, sans-serif',
        color: '#4B369D'
    }
    const styleText = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '18px',
        marginTop: '25px',
        marginLeft: '42px',
        color: '#4B369D'
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2, color: "#4B369D", left: 22, top: 23 }}
                onClick={e => {
                    e.preventDefault();
                    history.goBack();
                }}
            >
                <ArrowBackIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <div style={{backgroundColor: '#EEEEEE', height: '250px', width: '100%'}}></div>
            <p style={styleText}>What's your name?</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '9px'
            }}>
                <input type='text' onChange={t => setFirst(t.target.value)} required style={styleInput1}/>
                <input type='text' onChange={t => setLast(t.target.value)} required style={styleInput1}/>
            </div>
            <p style={styleText}>Email</p>
            <input type='text' onChange={t => setEmail(t.target.value)} required style={styleInput2}/>
            <p style={styleText}>Password</p>
            <input type='password' onChange={t => setPassword(t.target.value)} required style={styleInput2}/>
            <p style={styleText}>Confirm Password</p>
            <input type='password' onChange={t => setConfirm(t.target.value)} required style={styleInput2}/>
            <button onClick={e => {
                e.preventDefault();
                attemptSignup();
            }} style={{
                width: '173px',
                height: '59px',
                marginLeft: '218px',
                marginTop: '39px',
                borderRadius: '15px',
                background: '#4B369D',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '27px'
            }}>Let's Go</button>
        </div>
    );
}