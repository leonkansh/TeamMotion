import { React } from "react";
import { CrownSimple } from 'phosphor-react';
import './AssignmentCard.css';

const convertUTC = (input_date) => {
    var options = { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var date = new Date(input_date);
    return date.toLocaleDateString("en-US", options);
}

/**
 * takes an Assignment object to parse assignment name, due date, lead name
 * @returns display a card that holds the parsed information
 */
export default function AssignmentCard({ assignment, assignment_id, setAssignmentId, setTodoList, data }) {
    const chooseStyle = () => {
        if (assignment._id === assignment_id) return 'selected-card';
        else return 'unselected-card';
    };

    const handleClick = (e) => {
        setAssignmentId(assignment._id);
        setTodoList(data.find((item) => item._id === assignment._id).todos);
    }

    return (
        <div className={`assignment-card ${chooseStyle()}`} onClick={handleClick}>
            <h4 className="assignment-card-name">{assignment.name}</h4>

            <p className="assignment-card-due">Due {convertUTC(assignment.due)}</p>

            <span className='assignment-card-leader'>
                <CrownSimple size={32} />
                <p>{assignment.leader.name}</p>
            </span>
        </div>
    );
}
