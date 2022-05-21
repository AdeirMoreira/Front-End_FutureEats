import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile, getOrdersHistory } from '../../services/ProfilePage';
import { ScreenContainerProfile, EnderecoContainer, InformacoesContainer, HistoricoContainer, TitleEndereco } from './styled';
import Edit from "@material-ui/icons/EditOutlined"
import Button from "@material-ui/core/Button"
import { Link, useNavigate } from 'react-router-dom';
import { goToEditarCadastroPage, goToEditarEndereçoPage } from '../../routes/coordinators';
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'

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

            <AppBar position="static" style={{ width: "100vw" }} >
              <Toolbar variant="dense">
                <Typography  variant="h6" style={{ color: "black", textAlign:"center" }} >
                  Meu Perfil
                </Typography>
              </Toolbar>
            </AppBar>

            <InformacoesContainer>
              <div>
              <p>{params.user.name}</p>
              <p>{params.user.email}</p>
              <p>{params.user.cpf}</p>
              </div>
              <div>
              <Button style={{ color: "black" }}
                onClick={() => goToEditarCadastroPage(navigate)}
                color='primary'
                aria-label='editar-perfil'>
                <Edit />
              </Button>
              </div>
              
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
            <b>Subtotal: R${res.totalPrice}</b>
            {/* <p>Horário do pedido: {new Date(res.createdAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <p>Horário da entrega: {new Date(res.expiresAt).toISOString().split("T")[1].slice(0, 5)}</p> */}
          </HistoricoContainer>
        ))}
      </ScreenContainerProfile>

    </div>
  )
}

