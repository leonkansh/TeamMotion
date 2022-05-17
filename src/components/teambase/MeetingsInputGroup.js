import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Meeting.css';

import IconButton from '@mui/material/IconButton';
import { CalendarBlank, Clock, X } from 'phosphor-react';

import Stack from '@mui/material/Stack';

const convertTime = (time) => {
    const hour = Math.trunc(time);
    let minute = Math.trunc((time % 1) * 60);
    minute = minute < 10 ? `0${minute}` : minute;
    return `${hour}:${minute}`;
}

const revertTime = (time) => {
    const hour = time.split(":")[0] * 1;
    const minute = time.split(":")[1] / 60;
    return hour + minute;
}

const convertDay = (day) => {
    if (day > 7 && day < 0) return;
    const days = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
    return days[day];
}

const revertDay = (day) => {
    const days = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
    return days.indexOf(day);
}

/**
 * @param { setDay, this_meeting, index of meeting list }
 * @returns parsed meeting content in an input form card
 */
export default function InputGroup({ meetings, setMeetings, deleteMeeting, meeting, index }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const [day, setDay] = React.useState(convertDay(meeting.weekday));
    const [name, setName] = React.useState(meeting.name);
    const [start, setStart] = React.useState(convertTime(meeting.start));
    const [end, setEnd] = React.useState(convertTime(meeting.end));

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleDay = (e) => {
        e.preventDefault();
        setDay(convertDay(e.target.value));
        let data = meetings;
        data[index].weekday = e.target.value;
        setMeetings(data);
        setAnchorEl(null);
    };

    const handleStart = (e) => {
        setStart(e.target.value);
        let data = meetings;
        data[index].start = revertTime(e.target.value);
        setMeetings(data);
    }

    const handleEnd = (e) => {
        setEnd(e.target.value);
        let data = meetings;
        data[index].end = revertTime(e.target.value);
        setMeetings(data);
    }

    const days = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];

    const handleName = (e) => {
        setName(e.target.value);
        let data = meetings;
        data[index].name = e.target.value;
        setMeetings(data);
    }
    return (
        <div className='input-group'>
            <Stack>
                <div style={{
                    direction: 'row'
                }}>
                    <input 
                        className="input-name" 
                        type="text" 
                        name="name" 
                        value={name} 
                        size="50"
                        placeholder='Meeting Name'
                        onChange={handleName}
                    />

                    <button className='btn-delete' onClick={e => deleteMeeting(e, index)}>
                        <X size={25} />
                    </button>
                </div>
                
                <p>When will it be?</p>

                <div className='inline-div'>
                    <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <CalendarBlank size={24} />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleDay}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        {days.map(
                            (day, index) => <MenuItem value={index} onClick={handleDay}>{day}</MenuItem>
                        )}
                    </Menu>

                    <p className='input-time'>{day}</p>
                </div>
                
                <div className='inline-div'>
                    <Clock size={24} />
                    <input className="input-time" placeholder="Start" value={start < 0 ? 0 : start} onChange={handleStart} />
                    <p> - </p>
                    <input className="input-time" placeholder="End" value={end < 0 ? 0 : end} onChange={handleEnd} />
                </div>
            </Stack>
        </div>
    )
}