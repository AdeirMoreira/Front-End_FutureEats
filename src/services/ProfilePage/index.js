import axios from "axios";
import { baseURL } from "../../constants/constants";
import { goToProfile } from "../../routes/coordinators";

const headers = {
    headers: {
        auth: window.localStorage.getItem('token')
    }
}

export const setHeader = (response) => {
    response && (headers.headers.auth = response.data.token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}

export const getProfile = (setUser, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    setLoading && setLoading(true)
    axios.get(`${baseURL}/profile`, headers
    ).then((res) => {
        setUser(res.data.user)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response.data)
        setLoading && setLoading(false)
    })
}

export const getOrdersHistory = (setHistory, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    setLoading(true)
    axios.get(`${baseURL}/orders/history`, headers
    ).then((res) => {
        setHistory(res.data.orders)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response.data)
        setLoading && setLoading(false)
    })
}

export const getEditAddress = (setEditAddress, setForm) => {
    axios.get(`${baseURL}/profile/address`, headers
    ).then((res) => {
        setEditAddress(res.data)
        setForm(res.data.address)
    }).catch((err) => {
        console.log(err.response.data)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const updateProfile = (form, setForm, setPersonalFormInputs, setUser, navigate, setMessageError) => {
    axios.put(`${baseURL}/profile`, form, headers
    ).then((res) => {
        setForm(setPersonalFormInputs(res.data))
        setUser(setPersonalFormInputs(res.data))
        goToProfile(navigate)
    }).catch((err) => {
        console.log(err.response)
        setMessageError(err.response.data.message)
    })
}

