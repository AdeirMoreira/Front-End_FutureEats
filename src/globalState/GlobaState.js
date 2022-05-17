import React, { useState } from "react";
import { FutureEats } from "./Context";

export const GlobalState = (props) =>{

    const [rest, setRest] = useState([]);

    const params = { 
        rest, 
        setRest,
    }

    return(
        <FutureEats.Provider value={params}>
            {props.children}
        </FutureEats.Provider> 
    )
}