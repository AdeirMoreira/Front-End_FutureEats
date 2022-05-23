import axios from "axios";
import { baseURL, headers } from "../../constants/constants";
import { goToFeedPage, goToProfile, goToSignUpAddress } from "../../routes/coordinators";

export const SignUpRequest = async (form, navigate, setErrorMessage, cleanFields) => {
    try {
        const response = await axios.post(`${baseURL}/signup`, form)
        window.localStorage.getItem('token') && window.localStorage.removeItem('token')
        window.localStorage.setItem('token', response.data.token)
        goToSignUpAddress(navigate)
        cleanFields()
    } catch (err) {
        setErrorMessage(err.response.data.message)
        console.log(err.response.data)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    }
}

export const SignUpRequestAndress = async (form, navigate, setErrorMessage, cleanfields, address) => {
    try {
        const response = await axios.put(`${baseURL}/address`, form, headers)
        window.localStorage.getItem('token') && window.localStorage.removeItem('token')
        window.localStorage.setItem('token', response.data.token)
        !address && goToFeedPage(navigate)
        address && goToProfile(navigate)
        cleanfields()
    } catch (err) {
        setErrorMessage && setErrorMessage(err.response.data.message)
        alert('desculpe, ocorreu um erro, tente novamente')
        console.log(err.response)
    }
}
