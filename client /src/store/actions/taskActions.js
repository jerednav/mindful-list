import axios from 'axios'
import { url } from '../../api/'
import { toast } from 'react-toastify'

export const getTasks = () => {
    return (dispatch) => {
        axios
        .get(`${url}/tasks`)
        .then(tasks => {
            dispatch({
                type: "GET_TASKS",
                tasks
            })
        })
        .catch(error => {
            console.log(error.response)
        })
    }
}


export const addTask = (newTask) => {
    return (dispatch, getState) => {
        axios
        .post(`${url}/tasks`, newTask)
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
        .put(`${url}/tasks/${id}`, updatedTask)
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
        .patch(`${url}/tasks/${id}`, {} )
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
        .delete(`${url}/tasks/${id}`)
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
