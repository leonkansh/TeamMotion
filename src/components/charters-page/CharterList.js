import React from 'react';
import CharterItem from './CharterItem';
import Box from '@mui/material/Box';

// container with purple bg
// a list of charter items
export default function CharterList() {
    return (
        <div>
            <h1>Charters list</h1>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 1,
                    pt: 2,
                    pl: 3,
                    pr: 3
                }}
            >

                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
                <CharterItem />
            </Box>
        </div>
    )
}