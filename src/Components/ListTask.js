import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const listtask = useSelector((State) => State.ListTask);
    
    const [status, setStatus] = useState("")
    return (
        <div>
            
                {status === "all"
                    ? listtask.map((el) => (
                    <Task 
                        key={el.id}
                        description={el.description}
                        id={el.id}
                        isdone={el.isdone}
                    />
                    
                        )
                            )   
                : status === "done"
                    ? listtask
                        .filter((el) => el.isdone)
                        .map((el) => (
                            <Task
                                key={el.id}
                                description={el.description}
                                id={el.id}
                                isdone={el.isdone}
                            />
                                )
                                    )
                    : listtask
                        .filter((el) => !el.isdone)
                        .map((el) => (
                            <Task
                                key={el.id}
                                description={el.description}
                                id={el.id}
                                isDone={el.isdone}
                            /> 
                                )    
                                    )                
                }
    </div>
    )}

export default ListTask ;
