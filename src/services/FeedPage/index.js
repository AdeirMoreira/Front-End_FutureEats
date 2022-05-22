import axios from 'axios';
import { baseURL, headers } from '../../constants/constants';

export const getRestaurants = (setRest, setLoading) => {
    setLoading && setLoading(true)
    console.log(headers)
    axios.get(`${baseURL}/restaurants`, headers
    ).then((res) => {
        setRest(res.data.restaurants)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response)
        setLoading && setLoading(false)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
};

export const getActiveOrder = (setOrder) => {
    console.log(headers)
    axios.get(`${baseURL}/active-order`, headers
    ).then((res) => {
        setOrder(res.data.order)
    }).catch((err) => {
        console.log(err.response)
    })
};