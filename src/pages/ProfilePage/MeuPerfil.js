import React, { useContext, useEffect } from 'react'

import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services';


export default function MeuPerfil () {
const token = localStorage.getItem('token');

const params = useContext(FutureEats)
console.log(params)

useEffect(()=>{
    getProfile(params.setUser, token)
}, []);


    // const infoPerfil = params.user && params.user.map((info)=>{
    //     return(
    //         <div key={info.id}>
    //             <p>{info.name}</p>
    //             <p>{info.email}</p>
    //             <p>{info.email}</p>
    //             <p>{info.cpf}</p>
    //             <p>{info.address}</p>
    //         </div>
    //     )
    // });
  return (
    <div>    
        <h3>Meu Perfil</h3>
        {/* {infoPerfil} */}
    </div>
  )
}

