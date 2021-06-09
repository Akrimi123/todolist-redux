import React, {useState} from 'react'
import { useDispatch } from 'react-redux'  
import { addTask } from '../Redux/Action/action'        


const AddTask = () => {
    const dispatch = useDispatch();
    const [TaskTask, setTaskTask] = useState("");
    return (
        <div>
            <input onChange={(e) => setTaskTask(e.target.value)} value={TaskTask} />
            <button
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
                    alert("Entry your task !!");
                }
                }}
            >
                ADD
            </button>
        </div>
    )
}

export default AddTask
