import TodoItem from "./TodoItem";

/**
 * Takes assignmentid as input props
 * Fetch a list of todo items using assignmentid
 * @returns a list of TodoItem(s) populated by API responses
 */
export default function TodoList() {

    // fetch todos (mock data)
    const todos = []
    for (let i = 0; i < 10; i++) {
        todos.push({
            "key": `item-${i}`,
            "name": `todo-title ${i}`,
            "date": "Due Mar 11 at 1:30pm",
            "assignee": `Assignee ${i}`
        });
    }

    return (
        <div>
            {todos.map(todo => { return (<TodoItem todo={todo} />) })}
        </div>
    );
}
