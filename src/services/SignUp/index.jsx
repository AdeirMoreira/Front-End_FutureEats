import axios from "axios";
import { baseURL, headers } from "../../constants/constants";
import { goToFeedPage, goToSignUpAddress } from "../../routes/coordinators";

export const SignUpRequest = async (form, navigate) => {
    try {
        const response = await axios.post(`${baseURL}/signup`, form)
        window.localStorage.setItem('token', response.data.token)
        goToSignUpAddress(navigate)
        console.log(response.data)
    } catch (err) {
        console.log(err.response.data)
        alert('desculpe, ocorreu um erro, tente novamente')
    }
}

export const SignUpRequestAndress = async (form, navigate) => {
    try {
        const response = await axios.put(`${baseURL}/address`, form, headers)
        window.localStorage.setItem('token', response.data.token)
        console.log(response.data)
        navigate && goToFeedPage(navigate)
    } catch (err) {
        console.log(err.response)
        alert('desculpe, ocorreu um erro, tente novamente')
    }
}
