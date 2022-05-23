import { useEffect } from "react";
import { gotoLogin } from "../routes/coordinators";

export const useProtectPage = (navigate) => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            gotoLogin(navigate)
        }
    })

}
