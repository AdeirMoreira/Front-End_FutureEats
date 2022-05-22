import axios from 'axios';
import { baseURL, headers } from '../../constants/constants';

export const getRestaurants = (setRest) => {

    axios.get(`${baseURL}/restaurants`, headers
    ).then((res) => {
        setRest(res.data.restaurants)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
};

export const getActiveOrder = (setOrder) => {

    axios.get(`${baseURL}/active-order`, headers
    ).then((res) => {
        setOrder(res.data.order)
    }).catch((err) => {
        console.log(err.response)
    })
};