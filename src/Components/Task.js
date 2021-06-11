import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask , editTask} from '../Redux/Action/action'

const Task = ({description , id}) => {

    const dispatch= useDispatch()
    const [edit, setEdit] = useState(false);
    const [newedit, setNewedit] = useState("");
    
    return (
        <div className="task" style={{marginLeft:'20px', marginTop:'20px',}}>
        
        {!edit ? (
            <textarea style={{borderRadius:'30px',  height:'30px',width:'300px',textAlign:'center',fontSize:'25px',background:'transparent',border:'none',color:'rgb(200, 115, 100)'}}
            value={description}
            readOnly={true}
            ></textarea>
        ) : (
            
            <input 
            defaultValue={description}
            type="text"
            onChange={(e) => {
                setNewedit(e.target.value);
            }}
            autoFocus
            />
            
        )}
        <div style={{marginLeft:'200px'}}>
            <button
            style={{color:'dark grey',fontSize:'20px',borderRadius:'30px',marginRight:'10px',background:'transparent',height:'30px',width:'100px',marginTop:'35px',marginBottom:'25px'}}
            onClick={() => {
            if (!edit) {
                setEdit(!edit);
                setNewedit(description);
            } else {
                if (!newedit) {
                
                setEdit(!edit);
                } else {
                dispatch(editTask({id, description: newedit}));
                setNewedit("");
                setEdit(!edit);
                }
            }
            }}
        >
            Edit
        </button>
        <button style={{background:'transparent',fontSize:'20px',color:'black',height:'30px',width:'100px',borderRadius:'30px',marginTop:'35px',marginBottom:'25px'}} onClick={() => dispatch(deleteTask(id))}>Delete</button>
        </div>
        </div>
    )
}

export default Task ;
