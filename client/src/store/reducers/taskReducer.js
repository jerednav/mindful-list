import { toast } from 'react-toastify'

const taskReducer = (tasks = [], action) => {
    switch(action.type) {
        case "GET_TASKS":
            return action.tasks.data;
        case "ADD_TASK":
            toast.success("A task was added...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.task.data, ...tasks];
        case "UPDATE_TASK":
            toast.success("A task was updated...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return tasks.map((task) =>
            task._id === action.task.data._id ? action.task.data : task
            );
        case "CHECK_TASK":
            toast.success ("A task status was changed", {
                position:toast.POSITION.BOTTOM_RIGHT,
            })
            return tasks.map((task) =>
            task._id === action.task.data._id ? action.task.data : task
            );
        case "DELETE_TASK":
            toast.success("A todo was deleted...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return tasks.filter((task) => task._id !== action.id);
        default:
            return tasks;
    }
}

export default taskReducer;