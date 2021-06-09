import React from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'


const TodoApp = () => {
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'0px',fontFamily:'monospace',fontSize:'60px',fontStyle:'italic',textDecoration:'underline',background:'aqua',}}>To Do lIST With Redux</h1>
            <AddTask />
            <ListTask />
        </div>
    )
}

export default TodoApp
