import axios from "axios";
import { goToProfile } from "../../routes/coordinators";
import { baseURL, headers, setHeader } from "../../constants/constants";


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
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    axios.get(`${baseURL}/profile/address`, headers
    ).then((res) => {
        setEditAddress(res.data)
        setForm(res.data.address)
    }).catch((err) => {
        console.log(err.response.data)
    })
}

export const updateProfile = (form, setForm, setPersonalFormInputs, setUser, navigate, setMessageError) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    axios.put(`${baseURL}/profile`, form, headers
    ).then((res) => {
        setForm(setPersonalFormInputs(res.data))
        setUser(setPersonalFormInputs(res.data))
        goToProfile(navigate)
    }).catch((err) => {
        console.log(err.response.data)
        setMessageError(err.response.data.message)
    })
}

