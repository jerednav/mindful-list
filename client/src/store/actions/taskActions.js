import axios from 'axios'
import { url, setHeaders } from '../../api/'
import { toast } from 'react-toastify'


export const getTasks = () => {
    return (dispatch) => {
        axios
        .get(`${url}/tasks`, setHeaders())
        .then(tasks => {
            dispatch({
                type: "GET_TASKS",
                tasks
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}


export const addTask = (newTask) => {
    return (dispatch, getState) => {
        const author = getState().auth.name
        const uid = getState().auth._id

        axios
        .post(`${url}/tasks`, {...newTask, author, uid}, setHeaders())
        .then((task) => {
            dispatch({
                type: "ADD_TASK",
                task
            })
        })
        .catch(error => {
            console.log(error.response);
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        })
    }
}


export const updateTask = (updatedTask, id) => {
    return (dispatch) => {
        axios
        .put(`${url}/tasks/${id}`, updatedTask, setHeaders())
        .then(task => {
            dispatch({
                type: "UPDATE_TASK",
                task
            })
        })
        .catch(error => {
            console.log(error.response);
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        })
    }
}

export const checkTask = (id) => {
    return (dispatch) => {
        axios
        .patch(`${url}/tasks/${id}`, {}, setHeaders())
        .then(task => {
            dispatch({
                type: "CHECK_TASK",
                task
            })
        })
        .catch(error => {
            console.log(error.response);
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        })
    }
}
export const deleteTask = (id) => {
    return (dispatch) => {
        axios
        .delete(`${url}/tasks/${id}`, setHeaders())
        .then(() => {
            dispatch({
                type: "DELETE_TASK",
                id
            })
        })
        .catch(error => {
            console.log(error.response);
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        })
    }
}
