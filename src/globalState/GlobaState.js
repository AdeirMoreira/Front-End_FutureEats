import React from "react";
import useForm from "../Hooks/useForm";
import { FutureEats } from "./Context";



export const GlobalState = (props) =>{
    const dataForm = {
        loginData: useForm({email: "", password: ""}),
    }

    const params = { 
        dataForm,
    }
    return(
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider> 
    )
}