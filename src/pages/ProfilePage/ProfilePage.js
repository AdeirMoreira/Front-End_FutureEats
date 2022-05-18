import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile, getOrdersHistory } from '../../services/ProfilePage';
import { ScreenContainer, EnderecoContainer, InformacoesContainer, HistoricoContainer } from './styled';
import Edit from "@material-ui/icons/Edit"
import Button from "@material-ui/core/Button"
import { Link, useNavigate } from 'react-router-dom';
import { goToEditarCadastroPage, goToEditarEndereçoPage } from '../../routes/coordinators';




export default function ProfilePage() {
  const navigate = useNavigate()
  const params = useContext(FutureEats)


  useEffect(() => {
    getProfile(params.setUser)
    getOrdersHistory(params.setHistory)
  }, []);



  return (
    <div>
      <ScreenContainer>
        {(params.user && params.history) &&
          <>
            <h3>Meu Perfil</h3>
            <InformacoesContainer>
              <p>Nome: {params.user.name}</p>
              <p>E-mail: {params.user.email}</p>
              <p>CPF: {params.user.cpf}</p>
              <Button
              onClick={()=>goToEditarCadastroPage(navigate)}
                color='primary'
              aria-label='editar-perfil'>
                <Edit/>
                </Button>
            </InformacoesContainer>
            <EnderecoContainer>
                <h3>Endereço de Entrega</h3>
              <p>Endereço: {params.user.address}</p>
               <Button
               onClick={()=>goToEditarEndereçoPage(navigate)}
                color='primary'
               arial-label='editar-endereço'
               ><Edit/></Button>
            </EnderecoContainer>
          </>

        }
        {(params.user && params.history) && params.history.map(res => (
          <HistoricoContainer key={res.createdAt}>
            <h3>Histórico de Pedidos</h3>
            <p>Nome do Restaurant: {res.restaurantName}</p>
            <p>Valor Cobrado: {res.totalPrice}</p>
            <p>Data do pedido: {new Date(res.createdAt).toISOString().split("T")[0].split('-').reverse().join('/')}</p>
            <p>Horário do pedido: {new Date(res.createdAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <p>Horário da entrega: {new Date(res.expiresAt).toISOString().split("T")[1].slice(0, 5)}</p>
          </HistoricoContainer>
        ))}
      </ScreenContainer>

    </div>
  )
}

