import axios from "axios";
import { baseURL, headers } from "../../constants/constants";

export const getRestaurantDetails = (setRestDetail, id, setLoading) => {
    setLoading(true)
    axios.get(`${baseURL}/restaurants/${id}`, headers)
        .then((response) => {
            setRestDetail(response.data)
        })
        .catch((error) => {
            console.log(error.response)
            alert("Ocorreu um erro, por favor tente mais tarde.")
        })
}