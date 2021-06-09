const initialState = {
    ListTask:[
        {
            id: 1 ,
            description:"WakeUp" ,
        },
        {
            id: 2,
            description:"Take your Break Fast" ,
        },
        {
            id: 3 ,
            description:"Do Yoga Exercices" ,
        },
        {
            id: 4 ,
            description:"Read Book" ,
        },
        {
            id: 5 ,
            description:"No instagram" ,
        },
    ],
};

export default function  reducer (State = initialState,action)  {
    switch (action.type){

        case "ADD":
            return{
                ...State,
                ListTask:[...State.ListTask , action.payload],
            };

        case "DELETE":
            return {
                ...State,
                ListTask: State.ListTask.filter((el) => el.id !== action.payload),
            };

            
        case "DONE":
            return {
                ...State,
                ListTask: State.ListTask.map((el) =>
                el.id === action.payload ? {...el, isDone: !el.isDone} : el
                ),
            };

        case "EDIT":
            return {
                ...State,
                ListTask: State.ListTask.map((el) =>
                    el.id === action.payload.id
                    ? {...el, description: action.payload.description} : el
                    ),
                };
            default:
                return State;
    }
};
