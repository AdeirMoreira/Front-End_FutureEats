import React from "react";
import { FutureEats } from "./Context";



export const GlobalState = (props) =>{
    const params = { 
        propiedade:"azul" 
    }
    return(
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider> 
    )
}