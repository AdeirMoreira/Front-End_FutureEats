import axios from "axios";
import { baseURL } from "../../constants";

export const getProfile = (setUser, token) => {

    axios.get(`${baseURL}/profile`,{
        headers:{
            auth: `${token}`
        }
    }).then((res)=>{
        setUser(res.data.user)
    }).catch((err)=>{
        alert("a net ta ruim, tente meia noite 👍")
    })
}

export const getOrdersHistory =(setHistory, token)=> {
    axios.get(`${baseURL}/orders/history`, {
        headers:{
            auth: `${token}`
        }
    }).then((res)=>{
        setHistory(res.data)
        // OLHAR ESSA PORRA DPS
    }).catch((err)=>{
        console.log(err.response)
        alert("ve o index la do service")
    })
}