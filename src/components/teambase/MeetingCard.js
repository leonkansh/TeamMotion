import React from 'react';
import Box from '@mui/material/Box';

export default function MeetingCard({ meeting }) {
    console.log(meeting);
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
            <p>{`${meeting.start} ~ ${meeting.end}`}</p>
            <p>{meeting.weekday}</p>
        </Box>
    );
}