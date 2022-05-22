import axios from "axios";
import { baseURL, headers } from "../../constants/constants";
import { goToFeedPage, goToSignUpAddress } from "../../routes/coordinators";

export const SignUpRequest = async (form, navigate, setErrorMessage) => {
    try {
        const response = await axios.post(`${baseURL}/signup`, form)
        window.localStorage.setItem('token', response.data.token)
        goToSignUpAddress(navigate)
    } catch (err) {
        setErrorMessage(err.response.data.message)
        console.log(err.response.data)
    }
}

export const SignUpRequestAndress = async (form, navigate) => {
    console.log(headers)
    try {
        const response = await axios.put(`${baseURL}/address`, form, headers)
        window.localStorage.setItem('token', response.data.token)
        navigate && goToFeedPage(navigate)
    } catch (err) {
        console.log(err.response)
        alert('desculpe, ocorreu um erro, tente novamente')
    }
}
