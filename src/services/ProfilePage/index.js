import axios from "axios";
import { baseURL, headers } from "../../constants/constants";

export const getProfile = (setUser) => {

    axios.get(`${baseURL}/profile`,headers
    ).then((res) => {
        setUser(res.data.user)
    }).catch((err)=>{
        alert("a net ta ruim, tente meia noite 👍")
    })
}

export const getOrdersHistory =(setHistory)=> {
    axios.get(`${baseURL}/orders/history`, headers
    ).then((res)=>{
        setHistory(res.data)
        console.log(res.data)
    }).catch((err)=>{
        console.log(err.response)
        alert("ve o index la do service")
    })
}