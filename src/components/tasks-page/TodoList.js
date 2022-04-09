import { useState, useEffect } from "react";
import { AssignmentContext } from "../../pages/AssignmentContext";
import TodoItem from "./TodoItem";
import { Grid } from '@mui/material';


/**
 * Takes assignmentid as input props
 * Fetch a list of todo items using assignmentid
 * @returns a list of TodoItem(s) populated by API responses
 */

export default function TodoList() {
    // const [todos, setTodos] = useState(data);

    // const handleStatus = (todo) => {
    //     let modified_todos = todos;
    //     // console.log("before setTodos:", modified_todos[todo.id].isComplete);
    //     modified_todos[todo.id].isComplete = !modified_todos[todo.id].isComplete;
    //     setTodos(modified_todos);
    //     // console.log("after setTodos:", todos[todo.id]);
    // }

    // TODO: handleDelete

    // TODO: handleEdit

    return (
        <AssignmentContext.Consumer>
            {value => (
                <Grid>
                    {
                        value.todo_list.map(todo => {
                            /** TODO: pass handleStatus function: <TodoItem todo={todo} handleStatus={handleStatus} /> */
                            if (!todo.completed) return <TodoItem todo={todo} />
                        })
                    }
                </Grid>
            )}
        </AssignmentContext.Consumer>
    );
}
