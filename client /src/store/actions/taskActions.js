import axios from 'axios'
import { url } from '../../api/'


export const addTask = (task) => {
    return (dispatch, getState) => {
        axios
        .post(`${url}/tasks`, task)
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
