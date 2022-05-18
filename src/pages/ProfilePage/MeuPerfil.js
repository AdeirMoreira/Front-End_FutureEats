import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services/ProfilePage';

import { Button } from '@material-ui/core';
import { ScreenContainer } from './styled';


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
        <ScreenContainer>
            {params.user &&
                <div>
                    <h3>Meu Perfil</h3>
                    <p>Nome: {params.user.name}</p>
                    <p>E-mail: {params.user.email}</p>
                    <p>CPF: {params.user.cpf}</p>
                    <p>Endereço: {params.user.address}</p>
                </div>
            }
        </ScreenContainer>
    )
}

