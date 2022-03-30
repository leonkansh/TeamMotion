import React from 'react';
import HeaderBar from '../components/HeaderBar';
import BottomNavBar from '../components/BottomNavbar';
import TodoList from '../components/TodoList';
import AssignmentList from '../components/AssignmentList';
import AddButton from '../components/AddButton';

// retrieve assignments pass into assignments and todos as props

export default function Tasks() {
    // store the current selected assignment id
    // setID, pass as callback into AssignmentList
    // pass useEffect into TodoList (render when new assignment) OR useEffect passes new todos into <TodoList />?
    /** parse before pass */
    const todoPath = "/tasks/create-todo";

    return (
        <div>
            <HeaderBar />
            Task page
            {/* AssignmentList.js */}
            <AssignmentList />

            {/* filter button */}

            {/* Parse and load a list of todos based on the assignment state */}
            {/* pass useEffect into TodoList (render when new assignment) OR useEffect passes new todos into <TodoList />? */}
            <TodoList />

            <AddButton path={todoPath} />
            <BottomNavBar />
        </div>
    )
}