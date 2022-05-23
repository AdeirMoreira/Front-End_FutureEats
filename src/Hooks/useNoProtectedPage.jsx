import { useEffect } from "react";
import { goToFeedPage } from "../routes/coordinators";

export const useNoProtectPage = (navigate) => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToFeedPage(navigate)
        }
    })

}
