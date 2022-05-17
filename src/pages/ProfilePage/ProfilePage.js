import React from 'react'
import {PerfilContainer} from './styled'
import MeuPerfil from './MeuPerfil'
import EditarEndereco from './EditarEndereco'
import EditarCadastro from './EditarCadastro'



export default function ProfilePage() {
  return (
    <PerfilContainer>
      <MeuPerfil/>
      <EditarEndereco/>
      <EditarCadastro/>
    </PerfilContainer>
  )
}
