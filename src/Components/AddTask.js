import React, {useState} from 'react'
import { useDispatch } from 'react-redux'  
import { addTask } from '../Redux/Action/action'        


const AddTask = () => {
    const dispatch = useDispatch();
    const [TaskTask, setTaskTask] = useState("");
    return (
        <div style={{textAlign:'center' , marginTop:'80px'}}>
            <input style={{background:'aqua'}} onChange={(e) => setTaskTask(e.target.value)} value={TaskTask} />
            <button
            style={{background:'#16c08d'}}
                onClick={() => {
                if (TaskTask) {
                    dispatch(
                    addTask({
                        id: Math.random(),
                        description: TaskTask,
                        isDone: false,
                    })
                    );
                    setTaskTask("");
                } else {
                    alert("OOooppss.....Entry your task please");
                }
                }}
            >
                ADD
            </button>
        </div>
    )
}

export default AddTask
