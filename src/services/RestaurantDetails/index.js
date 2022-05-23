import axios from "axios";

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