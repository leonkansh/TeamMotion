import { React, useState } from "react";
import { ButtonBase } from "@mui/material";

const unselectedStyle = {
    bgcolor: '#E3E5FC',
    border: 'none',
    boxShadow: 1,
    borderRadius: 5,
    p: 2,
    minWidth: 200,
    minheight: 150
};

const selectedStyle = {
    bgcolor: '#4B369D',
    color: '#ffffff',
    border: 'none',
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
            <div className='assignment-card'>
                <h4 className="assignment-card-name">{assignment.name}</h4>

                <p className="assignment-card-due">Due {convertUTC(assignment.due)}</p>

                <p className="assignment-card-leader">Leader: {assignment.leader.name}</p>
            </div>
        </ButtonBase>
    );
}
