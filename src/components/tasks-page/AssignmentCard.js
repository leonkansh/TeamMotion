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

const convertUTC = (input_date) => {
    var options = { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var date = new Date(input_date);
    return date.toLocaleDateString("en-US", options);
}

/**
 * takes an Assignment object to parse assignment name, due date, lead name
 * @returns display a card that holds the parsed information
 */
export default function AssignmentCard({ assignment, setAssignmentId, setTodoList, data, index }) {
    const [style, setStyle] = useState((index == 0) ? selectedStyle : unselectedStyle);
    return (
        <ButtonBase
            key={assignment._id}
            focusRipple
            sx={style}
            autoFocus={(index == 0) && true}
            onClick={(e) => {
                setStyle(selectedStyle);
                setAssignmentId(assignment._id);
                setTodoList(data.find(item => item._id === assignment._id).todos)
            }}
            onBlur={(e) => {
                setStyle(unselectedStyle)
                setAssignmentId(assignment._id);
                setTodoList(data.find(item => item._id === assignment._id).todos)
            }}
        >
            <Box>
                <Typography sx={{ fontSize: 20 }} component="div" >
                    {assignment.name}
                </Typography>

                <Typography color="text.secondary" >
                    Due {convertUTC(assignment.due)}
                </Typography>

                <Typography variant="body2">
                    Leader: {assignment.leader.name}
                </Typography>
            </Box>
        </ButtonBase>
    );
}
