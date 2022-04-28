import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Meeting.css';

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

// console.log(revertTime("15:50"));
// console.log(convertTime(revertTime("15:50")));

/**
 * 
 * @param { setDay, this_meeting, index of meeting list }
 * @returns parsed meeting content in an input form card
 */
export default function InputGroup({ setMeetings, meeting, index }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [day, setDay] = React.useState();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleDay = (e) => {
        e.preventDefault();
        if (e.target.value) setDay(e.target.value)
        setAnchorEl(null);
    };

    const [name, setName] = React.useState(meeting.name);
    const [start, setStart] = React.useState(convertTime(meeting.start));
    const [end, setEnd] = React.useState(convertTime(meeting.end));

    const days = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
    
    return (
        <div className='input-group'>
            <input className="input-name" type="text" name="name" value={name} size="50" onChange={e => setName(e.target.value)}/>
            <p>When will it be?</p>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                day
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleDay}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                defaultValue={0}
            >
                {days.map(
                    (day, index) => <MenuItem value={index} onClick={handleDay}>{day}</MenuItem>
                )}
            </Menu>
            
            <p>{meeting.weekday}</p>
            <input className="input-time" value={start} onChange={e => setStart(e.target.value)} />
            <input className="input-time" value={end} onChange={e => setEnd(e.target.value)} />

        </div>
    )
}