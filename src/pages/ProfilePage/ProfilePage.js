import React from 'react'
import MeuPerfil from './MeuPerfil'
import EditarEndereco from './EditarEndereco'
import EditarCadastro from './EditarCadastro'



export default function ProfilePage() {
  return (
    <div>
      <MeuPerfil/>
      <EditarEndereco/>
      <EditarCadastro/>
    </div>
  )
}
