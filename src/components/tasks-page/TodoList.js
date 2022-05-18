import React from "react";
import { AssignmentContext } from "../../pages/AssignmentContext";
import { useParams } from 'react-router-dom';
import TodoItem from "./TodoItem";
import { Grid } from '@mui/material';

export default function TodoList() {
    const { orgid, teamid } = useParams();
    const value = React.useContext(AssignmentContext);

    const handleStatus = (todo) => {
        let modified_todos = value.todo_list;
        const index = modified_todos.indexOf(todo);
        modified_todos[index].completed = !modified_todos[index].completed;
        changeComplete(modified_todos[index]._id, modified_todos[index].completed, value.assignment_id)
        value.setTodoList(modified_todos);
    }

    const changeComplete = async (todoId, completed, assignmentId) => {
        const todo = { todoId: todoId, completed: completed };
        await fetch(`https://tadashi-srv.herokuapp.com/api/assignments/${orgid}/${assignmentId}/team/${teamid}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
    }

    const handleDelete = (todo) => {
        let modified_todos = value.todo_list;
        modified_todos = modified_todos.filter(item => item !== todo);
        deleteTodo(todo._id, value.assignment_id);
        value.setTodoList(modified_todos);
    }

    const deleteTodo = async (todoId, assignmentId) => {
        const todo = { todoId: todoId };
        await fetch(`https://tadashi-srv.herokuapp.com/api/assignments/${orgid}/${assignmentId}/team/${teamid}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).catch(e => {
            console.log("error", e);
        })
    }

    // TODO: handleEdit

    return (
        <Grid>
            {
                value.todo_list.map(todo => {
                    return <TodoItem
                        key={todo._id}
                        todo={todo}
                        handleStatus={handleStatus}
                        handleDelete={handleDelete}
                    />
                })
            }
        </Grid>
    );
}
