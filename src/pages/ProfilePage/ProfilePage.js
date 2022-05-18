import React, { useContext, useEffect } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services/ProfilePage';
import EditarEndereco from './EditarEndereco'
import EditarCadastro from './EditarCadastro'
import { ScreenContainer, EnderecoContainer, InformacoesContainer } from './styled';



export default function ProfilePage() {
  const params = useContext(FutureEats)


  useEffect(() => {
    getProfile(params.setUser)
    
}, []);



  return (
    <div>
      <ScreenContainer>
            {params.user &&
                <>
                    <h3>Meu Perfil</h3>
                    <InformacoesContainer>
                    <p>Nome: {params.user.name}</p>
                    <p>E-mail: {params.user.email}</p>
                    <p>CPF: {params.user.cpf}</p>
                    </InformacoesContainer>
                    <EnderecoContainer>
                    <p>Endereço: {params.user.address}</p>
                    </EnderecoContainer>
                </>
                }

        </ScreenContainer> 
        

      {/* <EditarEndereco/>
      <EditarCadastro/> */}
    </div>
  )
}
