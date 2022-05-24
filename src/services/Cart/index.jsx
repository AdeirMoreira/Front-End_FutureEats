import axios from "axios";
import { baseURL, headers, setHeader } from "../../constants/constants";


export const PlaceOrder = async (id, body, cleanCart) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    try {
        await axios.post(`${baseURL}/restaurants/${id}/order`, body, headers)
        cleanCart()
    } catch (err) {
        console.log(err.response.data)
    }
} 