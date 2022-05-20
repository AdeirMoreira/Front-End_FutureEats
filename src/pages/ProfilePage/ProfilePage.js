import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile, getOrdersHistory } from '../../services/ProfilePage';
import { ScreenContainerProfile, EnderecoContainer, InformacoesContainer, HistoricoContainer, TitleEndereco } from './styled';
import Edit from "@material-ui/icons/EditOutlined"
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
      <ScreenContainerProfile>
        {(params.user && params.history) &&
          <>

            <p>Meu Perfil</p>

            <InformacoesContainer>
              <p>Nome: {params.user.name}</p>
              <p>E-mail: {params.user.email}</p>
              <p>CPF: {params.user.cpf}</p>
              <Button style={{ color: "black" }}
                onClick={() => goToEditarCadastroPage(navigate)}
                color='primary'
                aria-label='editar-perfil'>
                <Edit />
              </Button>
            </InformacoesContainer>
            <TitleEndereco>
              <p style={{ color: "#b8b8b8" }}>Endereço cadastrado</p>
            </TitleEndereco>
            <EnderecoContainer>
              <p>Endereço: {params.user.address}</p>
              <div>
                <Button style={{ color: "black" }}
                  onClick={() => goToEditarEndereçoPage(navigate)}
                  arial-label='editar-endereço'
                ><Edit /></Button>
              </div>
            </EnderecoContainer>
            <p>Histórico de Pedidos</p>

          </>

        }
        {(params.user && params.history) && params.history.map(res => (



          <HistoricoContainer key={res.createdAt}>
            <p style={{ color: "#5cb646" }}
            >{res.restaurantName}</p>
            <p style={{ fontSize: "12px" }} >Data do pedido: {new Date(res.createdAt).toISOString().split("T")[0].split('-').reverse().join('/')}</p>
            <b>Subtotal: {res.totalPrice}</b>
            {/* <p>Horário do pedido: {new Date(res.createdAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <p>Horário da entrega: {new Date(res.expiresAt).toISOString().split("T")[1].slice(0, 5)}</p> */}
          </HistoricoContainer>
        ))}
      </ScreenContainerProfile>

    </div>
  )
}

