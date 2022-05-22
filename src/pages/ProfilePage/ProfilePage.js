import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile, getOrdersHistory } from '../../services/ProfilePage';
import { ScreenContainerProfile, EnderecoContainer, InformacoesContainer, HistoricoContainer, TitleEndereco } from './styled';
import Edit from "@material-ui/icons/EditOutlined"
import Button from "@material-ui/core/Button"
import { useNavigate } from 'react-router-dom';
import { goToEditarCadastroPage, goToEditarEndereçoPage } from '../../routes/coordinators';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LoadingCompoent from '../../Components/Loading/loading';

export default function ProfilePage() {
  const navigate = useNavigate()
  const params = useContext(FutureEats)

  useLayoutEffect(() => {
    getProfile(params.setUser)
    getOrdersHistory(params.setHistory)
  }, []);

  return (
    <div>

      <ScreenContainerProfile>
        {(params.user && params.history) &&
          <>
            <Header
              setUser={params.setUser}
              setRestDetail={params.setRestDetail}
              setHistory={params.setHistory}
              setRest={params.setRest}
              setOrder={params.setOrder}
              setCart={params.setCart} />

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
            <p style={{ fontSize: "12px" }} >Pedido: {new Date(res.createdAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <p style={{ fontSize: "12px" }} >Entrega: {new Date(res.expiresAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <b>Subtotal: R${res.totalPrice.toFixed(2).replace('.', ',')}</b>


          </HistoricoContainer>
        ))}
        <Footer />
      </ScreenContainerProfile>

    </div>
  )
}

