import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask , editTask} from '../Redux/Action/action'

const Task = ({description , id}) => {

    const dispatch= useDispatch()
    const [edit, setEdit] = useState(false);
    const [edit_description, setEdit_description] = useState("");
    
    return (
        <div className="task" style={{marginLeft:'20px', marginTop:'20px',}}>
        
        {!edit ? (
            <textarea
            rows="1"
            cols="40"
            value={description}
            readOnly={true}
            ></textarea>
        ) : (
            
            <input
            defaultValue={description}
            type="text"
            onChange={(e) => {
                setEdit_description(e.target.value);
            }}
            autoFocus
            />
            
        )}
        <div style={{marginLeft:'200px'}}>
            <button
            style={{background:'blue',fontSize:'20px'}}
            onClick={() => {
            if (!edit) {
                setEdit(!edit);
                setEdit_description(description);
            } else {
                if (!edit_description) {
                
                setEdit(!edit);
                } else {
                dispatch(editTask({id, description: edit_description}));
                setEdit_description("");
                setEdit(!edit);
                }
            }
            }}
        >
            Edit
        </button>
        <button style={{background:'red',fontSize:'20px',color:'white'}} onClick={() => dispatch(deleteTask(id))}>DELETE</button>
        </div>
        </div>
    )
}

export default Task ;
