import axios from "axios";
import { goToFeedPage, goToProfile, goToSignUpAddress } from "../../routes/coordinators";

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

const headers = {
    headers: {
        auth: window.localStorage.getItem('token')
    }
}

const setHeader = (response) => {
    response && (headers.headers.auth = response.data.token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}

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
        alert("Ocorreu um erro, por favor tente mais tarde.")
    }
}

export const SignUpRequestAndress = async (form, navigate, setErrorMessage, cleanfields, address) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
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
