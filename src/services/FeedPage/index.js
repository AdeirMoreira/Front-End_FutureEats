import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

const headers = {
    headers: {
        auth: window.localStorage.getItem('token')
    }
}

const setHeader = (response) => {
    response && (headers.headers.auth = response.data.token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}

export const getRestaurants = (setRest, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    setLoading && setLoading(true)
    axios.get(`${baseURL}/restaurants`, headers
    ).then((res) => {
        setRest(res.data.restaurants)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response)
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