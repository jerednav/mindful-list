import axios from 'axios'
import { url } from '../../api/'

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
        .then(task => {
            dispatch({
                type: "ADD_TASK",
                task
            })
        })
        .catch(error => {
            console.log(error.response)
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
            console.log(error.response)
        })
    }
}
