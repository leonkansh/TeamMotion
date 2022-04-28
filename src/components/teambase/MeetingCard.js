import React from 'react';
import Box from '@mui/material/Box';

export default function MeetingCard({ meeting }) {
    const convertTime = (time) => {
        const hour = Math.trunc(time);
        let minute = Math.trunc((time % 1) * 60);
        minute = minute < 10 ? `0${minute}` : minute;
        return `${hour}:${minute}`;
    }

    const convertDay = (day) => {
        if (day > 7 && day < 0) return;
        const days = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
        return days[day];
    }

    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: 8,
                minWidth: 'auto',
                minHeight: 196,
                pt: 0.5,
                pl: 4,
                pr: 4,
                pb: 0.5,
                mb: 2
            }}
        >
            <h2>{meeting.name}</h2>
            <p>{`${convertTime(meeting.start)} ~ ${convertTime(meeting.end)}`}</p>
            <p>{convertDay(meeting.weekday)}</p>
        </Box>
    );
}