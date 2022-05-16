import React from "react";
import useForm from "../Hooks/useForm";
import { FutureEats } from "./Context";



export const GlobalState = (props) => {
    const dataForm = {
        personalData: useForm({ name: "", email: "", cpf: "", password: "" }),
        andressData: useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    }

    const params = {
        dataForm,
    }
    return (
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider>
    )
}