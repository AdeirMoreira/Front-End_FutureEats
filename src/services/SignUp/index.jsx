import axios from "axios";
import { baseURL, headers } from "../../constants/constants";

export const SignUpRequest = async (form) => {
    try {
        const response = await axios.post(`${baseURL}/signup`, form)
        console.log(response)
        window.localStorage.setItem('token', response.data.token)
    } catch (err) {
        console.log(err.response.data)
    }
}

export const SignUpRequestAndress = async (form) => {
    try {
        const response = await axios.put(`${baseURL}/address`, form, headers)
        window.localStorage.setItem('token', response.data.token)
        alert("AEW CARACA, RECEBA")
    } catch (err) {
        console.log(err.response.data)
    }
}
