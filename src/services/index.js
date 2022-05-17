import axios from "axios";
import { baseURL } from "../constants/constants";

export const getProfile = (setUser, token) => {

    axios.get(`${baseURL}/profile`, {
        headers: {
            auth: `${token}`
        }
    }).then((res) => {
        setUser(res.data.user)
    }).catch((err) => {
        alert("vo vê e te aviso")
    })
}