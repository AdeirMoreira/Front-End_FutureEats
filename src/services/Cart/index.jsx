import axios from "axios";
import { baseURL, headers } from "../../constants/constants";

export const PlaceOrder = async (id, body, cleanCart) => {
    try {
        const response = await axios.post(`${baseURL}/restaurants/${id}/order`, body, headers)
        console.log(response.data)
        cleanCart()
    } catch (err) {
        console.log(err.response)
    }
} 