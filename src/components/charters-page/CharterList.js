import React from 'react';
import CharterItem from './CharterItem';
import Box from '@mui/material/Box';

// container with purple bg
// a list of charter items
export default function CharterList({ name, data_list }) {
    return (
        <div>
            <h1>{name}</h1>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    minHeight: "100vh",
                    pt: 2,
                    pl: 3,
                    pr: 3
                }}
            >
                {
                    data_list.map(item => <CharterItem item={item} />)
                }
            </Box>
        </div>
    )
}