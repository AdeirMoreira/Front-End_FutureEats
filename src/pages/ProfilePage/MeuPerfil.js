import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services/ProfilePage';

import { Button } from '@material-ui/core';


export default function MeuPerfil() {
    const token = localStorage.getItem('token');
    const params = useContext(FutureEats)

//  const ordersHistory = history && history.map((pedidos)=>(
//     <div>

//     </div>
//  )) 


    useEffect(() => {
        getProfile(params.setUser, token)
    }, []);

    return (
        <div>
            {params.user &&
                <div>
                    <h3>Meu Perfil</h3>
                    <p>{params.user.name}</p>
                    <p>{params.user.email}</p>
                    <p>{params.user.cpf}</p>
                    <p>{params.user.address}</p>
                    <Button
                    variant="contained"
                    color="primary"
                    >Eu sou lindo e maravilhoso</Button>
                </div>
            }
        </div>
    )
}

