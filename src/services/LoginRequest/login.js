import axios from 'axios'
import { goToFeedPage, goToSignUpAddress } from '../../routes/coordinators'
import { baseURL, setHeader } from '../../constants/constants'


export const login = (form, navigate, setErrorMessage, cleanFields) => {
    setErrorMessage('')
    axios.post(`${baseURL}/user/login`, form)
        .then((response) => {
            setHeader(response.data.token)
            window.localStorage.setItem('token', response.data.token)
            response.data.user.hasAddress ? goToFeedPage(navigate) : goToSignUpAddress(navigate)
            cleanFields()
        })
        .catch((error) => {
            setErrorMessage(error.response.data.message)
        })
}

