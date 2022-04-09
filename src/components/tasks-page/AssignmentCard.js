import { React, useState } from "react";
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ButtonBase } from "@mui/material";

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
export default function AssignmentCard({ assignment, setAssignmentId }) {
    const [style, setStyle] = useState(unselectedStyle);

    return (
        <ButtonBase
            key={assignment._id}
            focusRipple
            sx={style}
            onClick={event => {
                console.log("is clicked!");
                setStyle(selectedStyle);
                setAssignmentId(assignment._id);
            }}
        >

            <Box>
                <Typography sx={{ fontSize: 20 }} component="div" >
                    {assignment.name}
                </Typography>

                <Typography color="text.secondary" >
                    Due Monday, Mar 11 | 11:59pm
                </Typography>

                <Typography variant="body2">
                    Leader: {assignment.leader.name}
                </Typography>
            </Box>
        </ButtonBase>
    );
}
