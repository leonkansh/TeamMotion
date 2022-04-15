import React from 'react';
import Box from '@mui/material/Box';
import { ButtonBase } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';

export default function CharterTemplateItem({ item }) {
    const charterCreatorPath = "/charters/create-charter";

    const location = useLocation();
    const { data } = location.state;
    if (!item) {
        item = data;
        console.log("item", item);
    }

    return (
        <ButtonBase
            focusRipple
            onClick={event => console.log("e", event.target.value)}
        >
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
                <Link to={{
                    pathname: charterCreatorPath,
                    state: {
                        data: data
                    },
                }}>Use this template</Link>
            </Box>
        </ButtonBase>
    );
}