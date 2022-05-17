import React from 'react';
import { X } from 'phosphor-react';
import './Meeting.css';

/**
 * @param { goals, setGoals, this_goal, index of goal list }
 * @returns parsed team goal content in an input form card
 */
export default function GoalsInputGroup({ goals, setGoals, deleteGoal, goal, index }) {
    const [name, setName] = React.useState(goal);

    const handleName = (e) => {
        setName(e.target.value);
        let data = goals;
        data[index] = e.target.value;
        setGoals(data);
    }
    return (
        <div key={`goal ${index}`} className='input-group'>
            <input
                className="input-name"
                type="text"
                name="name"
                placeholder='Enter a team goal!'
                value={name}
                size="50"
                onChange={handleName}
            />
            <button className='btn-delete' onClick={e => deleteGoal(e, index)}>
                <X size={25} />
            </button>
        </div>
    )
}