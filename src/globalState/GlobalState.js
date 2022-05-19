import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import { FutureEats } from "./Context";

export const GlobalState = (props) => {
    const [restDetail, setRestDetail] = useState()
    const [user, setUser] = useState()
    const [history, setHistory] = useState()
    const [rest, setRest] = useState([])
    const [cart, setCart] = useState([])
    const dataForm = {

        editPersonalData: useForm({ name: "", email: "", cpf: "" }),
        loginData: useForm({ email: "", password: "" }),
        personalData: useForm({ name: "", email: "", cpf: "", password: "" }),
        andressData: useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    }

    const params = {
        dataForm,
        rest,
        setRest,
        user,
        setUser,
        history,
        setHistory,
        restDetail,
        setRestDetail,
        cart,
        setCart
    }

    return (
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider>
    )
}