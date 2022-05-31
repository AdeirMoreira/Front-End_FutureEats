import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerHeader } from './styled'
import { gotoLogin } from '../../routes/coordinators'
import { Button } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'

export default function Header(props) {
  const navigate = useNavigate()
  const logOut = () => {
    window.localStorage.removeItem('token')
    props.setUser()
    props.setRest([])
    props.setHistory()
    props.setRestDetail()
    props.setOrder()
    props.setCart([])
    gotoLogin(navigate)
  }
  return (
    <ContainerHeader>
      <h1 style={{ margin: 0 }}>Future<span style={{ color: '#5cb646' }}>Eats</span></h1>
      <Button color='primary' onClick={logOut}><ExitToApp />Sair</Button>
    </ContainerHeader>
  )
}
