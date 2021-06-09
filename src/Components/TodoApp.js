import React from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'


const TodoApp = () => {
    return (
        <div>
            <h1>To Do lIST With Redux</h1>
            <AddTask />
            <ListTask />
        </div>
    )
}

export default TodoApp
