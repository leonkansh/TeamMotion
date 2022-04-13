import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import TodoList from '../components/tasks-page/TodoList';
import AssignmentList from '../components/tasks-page/AssignmentList';
import AddButton from '../components/common/AddButton';
import { AssignmentContext } from './AssignmentContext';

// mock(fetch) assignments
const assignments_data = require('./assignments.json');
/*
React.useEffect(() => {
    // if changed and different state
        // call api to update
}, [assignments_data]); // Only re-run the effect if assignment_data changes
*/

/**
 * listen to assignment context, call api once updated
 */
export default function Tasks() {
    const todoPath = "/tasks/create-todo";

    const [data, setData] = React.useState(assignments_data);

    const [assignment_id, setAssignmentId] = React.useState(data[0]._id);

    const [todo_list, setTodoList] = React.useState([]);
    React.useEffect(() => {
        let todos = data.find(item => item._id === assignment_id).todos;
        setTodoList(todos);
    });

    return (
        <div>
            <HeaderBar screenname="Task" />

            <AssignmentContext.Provider
                value={{ data, assignment_id, setAssignmentId, todo_list, setTodoList }}
            >
                <AssignmentList />
                <TodoList />
            </AssignmentContext.Provider>

            {/* filter button */}

            <AddButton path={todoPath} />
            <BottomNavBar />
        </div>
    )
}