import axios from 'axios';
import { baseURL, headers, setHeader } from '../../constants/constants';


export const getRestaurants = (setRest, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    setLoading && setLoading(true)
    axios.get(`${baseURL}/restaurant/all`, headers
    ).then((res) => {
        setRest(res.data.restaurants)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response.data)
        setLoading && setLoading(false)
    })
};

export const getActiveOrder = (setOrder) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    axios.get(`${baseURL}/order/active`, headers
    ).then((res) => {
        setOrder(res.data.order)
    }).catch((err) => {
        console.log(err.response.data)
    })
};