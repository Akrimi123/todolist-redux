import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const listtask = useSelector((State) => State.ListTask);

    return (
        <div style={{marginLeft:'400px',marginTop:'50px',borderStyle:'ridge',marginRight:'400px',justifyContent:'center',borderRadius:'30px',marginBottom:'40px'}}>
                {
                    listtask.map((el) => (
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
