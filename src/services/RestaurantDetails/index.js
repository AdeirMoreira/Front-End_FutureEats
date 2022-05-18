import axios from "axios";
import { baseURL, headers } from "../../constants/constants";

export const getRestaurantDetails = (setRestDetail, id) => {
    axios.get(`${baseURL}/restaurants/${id}`, headers)
    .then((response) => {
        setRestDetail(response.data)
        // console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response)
    })


}