import axios from "axios";
import { baseURL, headers, setHeader } from "../../constants/constants";


export const getRestaurantDetails = (setRestDetail, id, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    setLoading(true)
    axios.get(`${baseURL}/restaurants/${id}`, headers)
        .then((response) => {
            setRestDetail(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
}