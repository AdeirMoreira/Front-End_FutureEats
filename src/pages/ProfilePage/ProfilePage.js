import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile, getOrdersHistory } from '../../services/ProfilePage';
import { ScreenContainerProfile, HistoricoContainer, ContainerDados, ContainerName, ContainerEmail, ContainerCpf, ContainerEndereco, TituloEndereco, DadosEndereco, ContainerTitulo } from './styled';
import Edit from "@material-ui/icons/EditOutlined"
import Button from "@material-ui/core/Button"
import { useNavigate } from 'react-router-dom';
import { goToEditarCadastroPage, goToEditarEndereçoPage } from '../../routes/coordinators';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

export default function ProfilePage() {
  const navigate = useNavigate()
  const params = useContext(FutureEats)

  useEffect(() => {
    !params.user && getProfile(params.setUser)
    getOrdersHistory(params.setHistory)
  }, []);

  return (
    <div>
      <ScreenContainerProfile>
        {(params.user && params.history) &&
          <div>
            <Header />

            <ContainerDados>
              <ContainerName>
                <p>{params.user.name}</p>
              </ContainerName>
              <ContainerEmail>
                <p>{params.user.email}</p>
              </ContainerEmail>
              <ContainerCpf>
                <p>{params.user.cpf}</p>
              </ContainerCpf>
              <Button style={{ color: "black" }}
                onClick={() => goToEditarCadastroPage(navigate)}
                color='primary'
                aria-label='editar-perfil'>
                <Edit />
              </Button>
            </ContainerDados>

            <ContainerEndereco>
              <TituloEndereco>
                <p style={{ color: "#b8b8b8" }}>Endereço cadastrado</p>
              </TituloEndereco>
              <DadosEndereco>
                <p>Endereço: {params.user.address}</p>
              </DadosEndereco>
              <Button style={{ color: "black" }}
                onClick={() => goToEditarEndereçoPage(navigate)}
                arial-label='editar-endereço'
              >
                <Edit />
              </Button>
            </ContainerEndereco>
          </div>
        }
        <ContainerTitulo>
        <p>Histórico de pedidos</p>
        </ContainerTitulo>
        {(params.user && params.history) && params.history.map(res => (
          <HistoricoContainer key={res.createdAt}>
            <p style={{ color: "#5cb646" }}>{res.restaurantName}</p>
            <p style={{ fontSize: "12px" }} >{new Date(res.createdAt).toISOString().split("T")[0].split('-').reverse().join('/')}</p>
            {/* <p style={{ fontSize: "12px" }} >Pedido: {new Date(res.createdAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <p style={{ fontSize: "12px" }} >Entrega: {new Date(res.expiresAt).toISOString().split("T")[1].slice(0, 5)}</p> */}
            <p>SUBTOTAL R${res.totalPrice.toFixed(2).replace('.', ',')}</p>


          </HistoricoContainer>
        ))}
        <Footer />
      </ScreenContainerProfile>

    </div>
  )
}

