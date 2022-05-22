import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gotoLogin } from "../routes/coordinators";

export default function useProtectPage() {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        !localStorage.getItem('token') && gotoLogin(navigate)
    })
}

