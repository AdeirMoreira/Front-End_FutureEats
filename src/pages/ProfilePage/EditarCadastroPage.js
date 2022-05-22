import React, { useContext, useEffect, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { InputsContainer, ScreenContainer, Header } from './styled'
import { TextField, Button } from '@material-ui/core'
import { goToBack } from '../../routes/coordinators'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../services/ProfilePage'
import { getProfile } from '../../services/ProfilePage'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'




const EditarCadastroPage = () => {
  const navigate = useNavigate()
  const params = useContext(FutureEats)

  const setPersonalFormInputs = (user) => {
    return {
      name: user.name,
      email: user.email,
      cpf: user.cpf
    }
  }

  useEffect(() => {
    !params.user && getProfile(params.setUser)
    params.user && setForm(setPersonalFormInputs(params.user))
  }, [params.user])

  const { form, onChange, cleanFields, setForm } = useForm({
    name: "",
    email: "",
    cpf: ""
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    updateProfile(form, setForm, setPersonalFormInputs, params.setUser)
  }
  return (
    <>
      {params.user &&
        <ScreenContainer>
        <Header>
      <AppBar position="static" style={{width:"100vw"}} >
        <Toolbar variant="dense">
          <IconButton onClick={() => goToBack(navigate)} edge="start" style={{color:"black"}} aria-label="voltar">
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" style={{color:"black"}} >
            Perfil
          </Typography>
        </Toolbar>
      </AppBar>
    </Header>
          <InputsContainer>
            <form onSubmit={onSubmitForm}>
              <TextField
                name={"name"}
                value={form.name}
                onChange={onChange}
                label={"Nome"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                label={"CPF"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <Button style={{color:"black", textTransform: 'none', marginTop:"15px"}}
                type={"submit"}
                fullWidth
                variant={'contained'}
                color={'primary'}
                margin={'normal'}
              >Salvar</Button>
            </form>
          </InputsContainer>
        </ScreenContainer>
      }</>
  )
}

export default EditarCadastroPage

