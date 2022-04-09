import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import TodoList from '../components/tasks-page/TodoList';
import AssignmentList from '../components/tasks-page/AssignmentList';
import AddButton from '../components/common/AddButton';
import { AssignmentContext } from './AssignmentContext';

// mock(fetch) assignments
const assignments_data = require('./assignments.json');

/**
 * listen to assignment context, call api once updated
 */
export default function Tasks() {
    const todoPath = "/tasks/create-todo";
    /** TODO: consider useContext than useState*/
    const [data, setData] = React.useState(assignments_data);
    const [assignment_id, setAssignmentId] = React.useState(data[0]._id);

    /** TODO: like data and assignment_id: useState */
    let todo_list = data.find(item => item._id === assignment_id).todos;

    return (
        <div>
            <HeaderBar />
            {/* TODO: pass down set functions */}
            <AssignmentContext.Provider value={{ data, assignment_id, todo_list }}>
                <AssignmentList />
                <TodoList />
            </AssignmentContext.Provider>

            {/* filter button */}

            <AddButton path={todoPath} />
            <BottomNavBar />
        </div>
    )
}