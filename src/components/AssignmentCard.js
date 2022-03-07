import React from "react";
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ButtonBase } from "@mui/material";
import { useState } from "react";

const unselectedStyle = {
    bgcolor: 'text.disabled',
    border: 1,
    boxShadow: 1,
    borderRadius: 5,
    p: 2,
    minWidth: 200,
    minheight: 150
};

const selectedStyle = {
    bgcolor: 'primary.main',
    border: 1,
    boxShadow: 1,
    borderRadius: 5,
    p: 2,
    minWidth: 200,
    minheight: 150
};

/**
 * takes an Assignment object to parse assignment name, due date, lead name
 * @returns display a card that holds the parsed information
 */
export default function AssignmentCard() {
    const [style, setStyle] = useState(unselectedStyle);

    return (
        <ButtonBase
            focusRipple
            sx={style}
            onClick={event => {
                console.log("is clicked!");
                setStyle(selectedStyle);
                // TODO: setCurrentAssignment name in List scope
            }}
        >

            <Box>
                <Typography sx={{ fontSize: 20 }} component="div" >
                    Assignment name
                </Typography>

                <Typography color="text.secondary" >
                    Due Monday, Mar 11 | 11:59pm
                </Typography>

                <Typography variant="body2">
                    Leader Name
                </Typography>
            </Box>
        </ButtonBase>
    );
}