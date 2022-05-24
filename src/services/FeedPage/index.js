import axios from 'axios';
import { baseURL, headers, setHeader } from '../../constants/constants';


export const getRestaurants = (setRest, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    setLoading && setLoading(true)
    axios.get(`${baseURL}/restaurants`, headers
    ).then((res) => {
        setRest(res.data.restaurants)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response.data)
        setLoading && setLoading(false)
    })
};

export const getActiveOrder = (setOrder) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    axios.get(`${baseURL}/active-order`, headers
    ).then((res) => {
        setOrder(res.data.order)
    }).catch((err) => {
        console.log(err.response.data)
    })
};