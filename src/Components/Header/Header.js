import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerHeader } from './styled'
import { gotoLogin } from '../../routes/coordinators'
import { Button } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'

export default function Header() {
  const navigate = useNavigate()
  const logOut = () => {
    window.localStorage.removeItem('token')
    gotoLogin(navigate)
  }
  return (
    <ContainerHeader>
      <h1 style={{ margin: 0 }}>Future<spam style={{ color: '#5cb646' }}>Eats</spam></h1>
      <Button color='primary' onClick={logOut}><ExitToApp />Sair</Button>
    </ContainerHeader>
  )
}
