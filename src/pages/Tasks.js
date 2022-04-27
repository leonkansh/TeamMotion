import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import TodoList from '../components/tasks-page/TodoList';
import AssignmentList from '../components/tasks-page/AssignmentList';
import AddButton from '../components/common/AddButton';
import { AssignmentContext } from './AssignmentContext';

export default function Tasks() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [assignment_id, setAssignmentId] = React.useState();
    const [todo_list, setTodoList] = React.useState([]);

    const loadAssignments = async () => {
        await fetch("http://localhost:3000/api/assignments/6263d2fb17033b23e05c0401/team/1")
            .then(res => res.json())
            .then(receivedData => {
                setData(receivedData);
                setAssignmentId(receivedData[0]._id)
                setTodoList(receivedData[0].todos);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }

    React.useEffect(() => {
        loadAssignments();
    }, []);

    const todoPath = "/tasks/create-todo";

    return (
        <div>
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
                    <HeaderBar screenname="Task" />

                    <AssignmentContext.Provider
                        value={{ data, assignment_id, setAssignmentId, todo_list, setTodoList }}
                    >
                        <AssignmentList />
                        <TodoList />
                    </AssignmentContext.Provider>

                    <AddButton path={todoPath} />
                    <BottomNavBar />
                </div>
            )}
        </div>
    )
}
