import React from 'react';
import HeaderBar from '../components/HeaderBar';
import BottomNavBar from '../components/BottomNavbar';
import TodoList from '../components/TodoList';

export default function Tasks() {
    return (
        <div>
            <HeaderBar />
            Task page
            {/* AssignmentList.js */}

            {/* filter button */}

            <TodoList />

            {/* floating add button */}

            <BottomNavBar />
        </div>
    )
}