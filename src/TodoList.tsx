import React from 'react';
import {filterValuesType, TaskType} from "./App"

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number) => void
    changeTodoListFilter: (newFilter:filterValuesType) => void
}

function TodoList(props: TodoListPropsType) {
    const tasks = props.tasks.map(t => {
        const removeTask = () =>props.removeTask(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button className="btr-remove" onClick={removeTask}>X</button>
            </li>
        )
    })

    const setAllFilterValue = ()=>props.changeTodoListFilter("all")
    const setActiveFilterValue = ()=>props.changeTodoListFilter("active")
    const setCompletedFilterValue = ()=>props.changeTodoListFilter("completed")
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button onClick={setAllFilterValue}>All</button>
                <button onClick={setActiveFilterValue}>Active</button>
                <button onClick={setCompletedFilterValue}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;