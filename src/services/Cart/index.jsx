import axios from "axios";
import { baseURL, headers, setHeader } from "../../constants/constants";


export const PlaceOrder = async (id, body, cleanCart) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    try {
        await axios.post(`${baseURL}/order/place/${id}`, body, headers)
        cleanCart()
    } catch (err) {
        console.log(err.response.data)
    }
} 