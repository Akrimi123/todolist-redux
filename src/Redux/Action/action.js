    // ADD Task
    export const addTask = (payload) => {
        return {
        type: "ADD",
        payload,
        };
    };
    
    // DELETE Task
    
    export const deleteTask = (payload) => {
        return {
        type: "DELETE",
        payload,
        };
    };
    
    // DONE Task
    
    export const doneTask = (payload) => {
        return {
        type: "DONE",
        payload,
        };
    };
    
    // EDIT Task
    
    export const editTask = (payload) => {
        return {
        type: "EDIT",
        payload,
        };
    };