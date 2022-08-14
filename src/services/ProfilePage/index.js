import axios from "axios";
import { goToProfile } from "../../routes/coordinators";
import { baseURL, headers, setHeader } from "../../constants/constants";


export const getProfile = (setUser, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    setLoading && setLoading(true)
    axios.get(`${baseURL}/user/profile`, headers
    ).then((res) => {
        setUser(res.data.user)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response.data)
        setLoading && setLoading(false)
    })
}

export const getOrdersHistory = (setHistory, setLoading) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    setLoading(true)
    axios.get(`${baseURL}/order/history`, headers
    ).then((res) => {
        setHistory(res.data.orders)
        setLoading && setLoading(false)
    }).catch((err) => {
        console.log(err.response.data)
        setLoading && setLoading(false)
    })
}

export const getEditAddress = (setEditAddress, setForm) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    axios.get(`${baseURL}/address/full`, headers
    ).then((res) => {
        setEditAddress(res.data)
        setForm(res.data.address)
    }).catch((err) => {
        console.log(err.response.data)
    })
}

export const updateProfile = (form, setForm, setPersonalFormInputs, setUser, navigate, setMessageError) => {
    (window.localStorage.getItem('token') && !headers.headers.authorization) && setHeader()
    axios.put(`${baseURL}/user/update`, form, headers
    ).then((res) => {
        setForm(setPersonalFormInputs(res.data))
        setUser(setPersonalFormInputs(res.data))
        goToProfile(navigate)
    }).catch((err) => {
        console.log(err.response.data)
        setMessageError(err.response.data.message)
    })
}

