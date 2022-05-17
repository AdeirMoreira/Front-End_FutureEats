import axios from 'axios'
import { baseURL } from '../../constants/constants'
import { goToFeedPage } from '../../routes/coordinators'


export const login = (form, navigate) => {
    axios.post(`${baseURL}/login`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            // goToFeedPage(navigate);
            console.log(response.data)
        })
        .catch((error) => {
            alert('Ocorreu um erro.')
            console.log(error.response)
        })
}
