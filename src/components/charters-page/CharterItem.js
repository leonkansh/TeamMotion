import React from 'react';
import Box from '@mui/material/Box';

// title: fontcolor varies when `charters` or `charter templates`
// content: line breaks, calendar view, placeholder

export default function CharterItem({ item }) {
    return (
        <div>
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
                <h2>{item.title || item.name}</h2>
                <p>{item.content}</p>
            </Box>
        </div>
    );
}