import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type filterValuesType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "CSS", isDone: true},
            {id: 3, title: "React", isDone: false}
        ]
    )

    function removeTask(taskID: number) {
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    const [todoListFilter, setTodoListFilter] = useState<filterValuesType>("all")

    function changeTodoListFilter(newFilterValue: filterValuesType) {
        setTodoListFilter(newFilterValue)
    }

    function getTasksForTodoList() {
        switch (todoListFilter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={getTasksForTodoList()}
                      removeTask={removeTask}
                      changeTodoListFilter={changeTodoListFilter}/>
        </div>
    );
}

export default App;

