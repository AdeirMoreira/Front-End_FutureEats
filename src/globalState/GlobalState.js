import React, { useState } from "react";
import { FutureEats } from "./Context";



export const GlobalState = (props) =>{

    const [user, setUser] = useState()

    const params = { 
        user,
        setUser,
    }
    return(
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider> 
    )
}