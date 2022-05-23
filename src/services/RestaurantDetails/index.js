import axios from "axios";
import { baseURL } from "../../constants/constants";

const headers = {
    headers: {
        auth: window.localStorage.getItem('token')
    }
}

export const setHeader = (response) => {
    response && (headers.headers.auth = response.data.token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}

export const getRestaurantDetails = (setRestDetail, id, setLoading) => {
    setLoading(true)
    axios.get(`${baseURL}/restaurants/${id}`, headers)
        .then((response) => {
            setRestDetail(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
}