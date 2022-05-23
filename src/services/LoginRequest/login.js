import axios from 'axios'
import { baseURL } from '../../constants/constants'
import { goToFeedPage } from '../../routes/coordinators'

const headers = {
    headers: {
        auth: window.localStorage.getItem('token')
    }
}

export const setHeader = (response) => {
    response && (headers.headers.auth = response.data.token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}


export const login = (form, navigate, setErrorMessage, cleanFields) => {
    axios.post(`${baseURL}/login`, form)
        .then((response) => {
            setHeader(response)
            window.localStorage.setItem('token', response.data.token)
            goToFeedPage(navigate);
            cleanFields()
        })
        .catch((error) => {
            setErrorMessage(error.response.data.message)
        })
}
