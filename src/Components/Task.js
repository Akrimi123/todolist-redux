import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask , doneTask , editTask} from '../Redux/Action/action'

const Task = ({description , id , isdone}) => {

    const dispatch= useDispatch()
    const [edit, setEdit] = useState(false);
    const [edit_description, setEdit_description] = useState("");
    
    return (
        <div className="task">
        
        {!edit ? (
            <textarea
            value={description}
            readOnly={true}
            ></textarea>
        ) : (
            
            <input
            className="description"
            defaultValue={description}
            type="text"
            onChange={(e) => {
                setEdit_description(e.target.value);
            }}
            autoFocus
            />
        )}
            <button
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
        <button onClick={() => dispatch(deleteTask(id))}>DELETE</button>
        <button onClick={() => dispatch(doneTask(id))}>
            {isdone ? "Undone" : "Done" }
        </button>
        </div>
    )
}

export default Task ;
