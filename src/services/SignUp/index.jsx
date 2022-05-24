import axios from "axios";
import { gotoLogin, goToProfile, goToSignUpAddress } from "../../routes/coordinators";
import { baseURL, headers, setHeader } from "../../constants/constants";

export const SignUpRequest = async (form, navigate, setErrorMessage, cleanFields) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    try {
        const response = await axios.post(`${baseURL}/signup`, form)
        window.localStorage.getItem('token') && window.localStorage.removeItem('token')
        window.localStorage.setItem('token', response.data.token)
        goToSignUpAddress(navigate)
        cleanFields()
    } catch (err) {
        setErrorMessage(err.response.data.message)
        console.log(err.response.data)
    }
}

export const SignUpRequestAndress = async (form, navigate, setErrorMessage, cleanfields, address) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    try {
        const response = await axios.put(`${baseURL}/address`, form, headers)
        window.localStorage.getItem('token') && window.localStorage.removeItem('token')
        window.localStorage.setItem('token', response.data.token)
        !address && gotoLogin(navigate)
        address && goToProfile(navigate)
        cleanfields()
    } catch (err) {
        setErrorMessage && console.log(err.response.data.message)
        console.log(err.response.data)
    }
}

