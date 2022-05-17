
import React from "react";
import useForm from "../Hooks/useForm";
import { FutureEats } from "./Context"; 

export const GlobalState = (props) => {
    const [rest, setRest] = useState([]);
    const dataForm = {
        loginData: useForm({email: "", password: ""}),
        personalData: useForm({ name: "", email: "", cpf: "", password: "" }),
        andressData: useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    }

    const params = {
        dataForm,
        rest, 
        setRest,
    }
    
    return (
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider>
    )
}