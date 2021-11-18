const taskReducer = (state = [], action ) => {
    switch (action.type){
        case "GET_TASKS":
            return action.tasks.data
        case "ADD_TASK":
            return [action.task.data, ...state ]
        case "UPDATE_TASK":
            return state.map((task) => 
                task._id === action.task.data._id ? action.task.data: task
            )

        default:
            return state;
    }
}

export default taskReducer