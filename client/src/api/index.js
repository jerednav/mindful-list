export const url = "https://jn-mindful-list.herokuapp.com/api"

export const setHeaders = () => {
    const header = {
        headers: {
            "x-auth-token" : localStorage.getItem('token')
        }
    }

    return header
}