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

export const PlaceOrder = async (id, body, cleanCart) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    try {
        const response = await axios.post(`${baseURL}/restaurants/${id}/order`, body, headers)
        console.log(response.data)
        cleanCart()
    } catch (err) {
        console.log(err.response.data)
    }
} 