const taskReducer = (state = [], action ) => {
    switch (action.type){
        case "ADD_TASK":
        return [action.data.task, ...state ]
        default:
            return state;
    }
}

export default taskReducer