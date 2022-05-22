import axios from "axios";
import { baseURL, headers } from "../../constants/constants";

export const getProfile = (setUser) => {
    axios.get(`${baseURL}/profile`, headers
    ).then((res) => {
        setUser(res.data.user)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const getOrdersHistory = (setHistory) => {
    axios.get(`${baseURL}/orders/history`, headers
    ).then((res) => {
        setHistory(res.data.orders)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const getEditAddress = (setEditAddress, setForm) => {
    axios.get(`${baseURL}/profile/address`, headers
    ).then((res) => {
        setEditAddress(res.data)
        setForm(res.data.address)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const updateProfile = (form, setForm, setPersonalFormInputs, setUser, cleanFields) => {
    axios.put(`${baseURL}/profile`, form, headers
    ).then((res) => {
        setForm(setPersonalFormInputs(res.data))
        cleanFields()
        setUser(setPersonalFormInputs(res.data))
    }).catch((err) => {
        console.log(err.response)
    })
}

