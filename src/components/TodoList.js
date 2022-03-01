import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

/**
 * Takes assignmentid as input props
 * Fetch a list of todo items using assignmentid
 * @returns a list of TodoItem(s) populated by API responses
 */

// fetch data (mock)
const data = []
for (let i = 0; i < 10; i++) {
    data.push({
        "id": i,
        "name": `todo-title ${i}`,
        "date": "Due Mar 11 at 1:30pm",
        "assignee": `Assignee ${i}`,
        "isComplete": false
    });
}

export default function TodoList() {
    const [todos, setTodos] = useState(data);

    const handleStatus = (todo) => {
        let modified_todos = todos;
        // console.log("before setTodos:", modified_todos[todo.id].isComplete);
        modified_todos[todo.id].isComplete = !modified_todos[todo.id].isComplete;
        setTodos(modified_todos);
        // console.log("after setTodos:", todos[todo.id]);
    }

    // TODO: handleDelete

    // TODO: handleEdit

    useEffect(() => {
        // TODO: show/hide as todos state changed
        console.log("updating item state");
    }, [todos]);

    return (
        <div>
            {todos.map((todo, index) => {
                if (!todo.isComplete) return (<TodoItem todo={todo} handleStatus={handleStatus} index={index} />)
            })}
        </div>
    );
}
