import React, {useState} from 'react'
import { useDispatch } from 'react-redux'  
import { addTask } from '../Redux/Action/action'        


const AddTask = () => {
    const dispatch = useDispatch();
    const [newtask, setNewtask] = useState("");
    return (
        <div style={{textAlign:'center' , marginTop:'80px'}}>
            <input style={{background:'transparent',height:'25px',width:'350px',borderRadius:'30px',textAlign:'center'}} onChange={(e) => setNewtask(e.target.value)} value={newtask} />
            <button
            style={{background:'rgb(200, 115, 100)',display:'flex',marginLeft:'610px',marginTop:'15px',height:'32px',width:'150px',borderRadius:'30px',justifyContent:'center',color:'white',fontSize:'22px'}}
                onClick={() => {
                    dispatch(
                    addTask({
                        id: Math.random(),
                        description: newtask,
                    })
                    );
                    setNewtask("");
                }
            }
            >
                Add Task
            </button>
        </div>
    )
}

export default AddTask
