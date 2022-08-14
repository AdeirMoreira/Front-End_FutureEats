export const baseURL = 'https://futureeats-backend.herokuapp.com'

export const headers = {
    headers: {
        authorization: localStorage.getItem('token')
    }
}

export const setHeader = (token) => {
    token && (headers.headers.authorization = token)
    !headers.headers.authorization && (headers.headers.authorization = window.localStorage.getItem('token'))
}