import React, { useEffect, useState } from "react";
import useForm from "../Hooks/useForm";
import { FutureEats } from "./Context";

export const GlobalState = (props) => {
    const [restDetail, setRestDetail] = useState()
    const [user, setUser] = useState()
    const [history, setHistory] = useState()
    const [rest, setRest] = useState([])
    const [order, setOrder] = useState([])
    const [cart, setCart] = useState([])

    // useEffect(() => console.log(cart), [cart])
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
        order,
        setOrder,
        cart,
        setCart
    }

    return (
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider>
    )
}