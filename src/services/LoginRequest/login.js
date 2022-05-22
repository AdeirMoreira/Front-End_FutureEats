import axios from 'axios'
import { baseURL } from '../../constants/constants'
import { goToFeedPage } from '../../routes/coordinators'


export const login = (form, navigate, setErrorMessage) => {
    axios.post(`${baseURL}/login`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            goToFeedPage(navigate);
        })
        .catch((error) => {
            setErrorMessage(error.response.data.message)
        })
}
