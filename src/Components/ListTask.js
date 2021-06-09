import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const listtask = useSelector((State) => State.ListTask);
    
    const [status, setStatus] = useState("")
    return (
        <div>
                {status === "map"
                    ? listtask.map((el) => (
                    <Task 
                        key={el.id}
                        description={el.description}
                        id={el.id}
                        
                    />
                        )
                            )   
                    : listtask
                        .map((el) => (
                            <Task
                                key={el.id}
                                description={el.description}
                                id={el.id}
                            /> 
                                )    
                                    )                
                }
    </div>
    )}

export default ListTask ;
