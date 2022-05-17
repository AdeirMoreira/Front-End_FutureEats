import axios from 'axios';
import { baseURL } from '../../constants';

export const getRestaurants = (setRest, token) => {

    axios.get(`${baseURL}/restaurants`, {
        headers: {
            auth: `${token}`
        }
    })
        .then((res) => {
            setRest(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err.response)
            alert("Ocorreu um erro, por favor tente mais tarde.")
        })
};