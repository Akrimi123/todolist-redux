import React from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'


const TodoApp = () => {
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'0px',fontFamily:'monospace',fontSize:'60px',fontStyle:'italic',borderStyle:'groove',marginLeft:'395px',marginRight:'395px',borderRadius:'50px',color:'rgb(200, 115, 100)',marginTop:'15px',background:'linear-gradient(to bottom,grey,white 100%)'}}>Plan Your Life</h1>
            <AddTask />
            <ListTask />
        </div>
    )
}

export default TodoApp
