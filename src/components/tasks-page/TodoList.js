import { useState, useEffect, useContext } from "react";
import { AssignmentContext } from "../../pages/AssignmentContext";
import TodoItem from "./TodoItem";
import { Grid } from '@mui/material';

export default function TodoList() {
    const value = useContext(AssignmentContext);

    const handleStatus = (todo) => {
        let modified_todos = value.todo_list;
        const index = modified_todos.indexOf(todo);
        modified_todos[index].completed = !modified_todos[index].completed
        value.setTodoList(modified_todos);
    }

    // TODO: handleDelete

    // TODO: handleEdit

    return (
        <Grid>
            {
                value.todo_list.map(todo => {
                    if (!todo.completed) return <TodoItem key={todo._id} todo={todo} handleStatus={handleStatus} />
                })
            }
        </Grid>
    );
}
