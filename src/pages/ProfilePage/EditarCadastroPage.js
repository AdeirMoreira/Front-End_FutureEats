import React, { useContext, useEffect, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { InputsContainer, ScreenContainer, Header, ErrorMessageContainer } from './styled'
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
import alertImg from '../../assets/Images/alert.png'
import { useProtectPage } from '../../Hooks/useProtectedPage'

const EditarCadastroPage = () => {
  const navigate = useNavigate()
  useProtectPage(navigate)
  const params = useContext(FutureEats)
  const [messageError, setMessageErro] = useState('')

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
  }, [params.user, params.setUser])

  const { form, onChange, setForm } = useForm({
    name: "",
    email: "",
    cpf: ""
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    const upDatedForm = updatedForm(form)
    updateProfile(upDatedForm, setForm, setPersonalFormInputs, params.setUser, navigate, setMessageErro)
  }

  const updatedForm = (form) => {
    const updateForm = form
    const checkedCPF = checkCPF(form.cpf)
    updateForm.cpf = checkedCPF
    return updateForm
  }

  const checkCPF = (CPF) => {
    const array = CPF.split('')
    const array2 = array.map(e => +e)
    const array3 = array2.filter(e => !isNaN(e))
    array3.splice(3, 0, '.')
    array3.splice(7, 0, '.')
    array3.splice(11, 0, '-')
    return array3.join('')
  }

  return (
    <>
      {params.user &&
        <ScreenContainer>
          <Header>
            <AppBar position="static" style={{ width: "100vw" }} >
              <Toolbar variant="dense">
                <IconButton onClick={() => goToBack(navigate)} edge="start" style={{ color: "black" }} aria-label="voltar">
                  <ArrowBackIos />
                </IconButton>
                <Typography variant="h6" style={{ color: "black" }} >
                  Editar Perfil
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
                type={'email'}
                placeholder={"email@email.com"}
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
                inputProps={{ pattern: "([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" }}
                placeholder={"000.000.000-00"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <Button style={{ color: "black", textTransform: 'none', marginTop: "15px" }}
                type={"submit"}
                fullWidth
                variant={'contained'}
                color={'primary'}
                margin={'normal'}
              >Salvar</Button>
            </form>
          </InputsContainer>
          <ErrorMessageContainer>
            {messageError &&
              <>
                <img src={alertImg} alt={'alet Logo'} />
                <b><p>{messageError}</p></b>
              </>
            }
          </ErrorMessageContainer>
        </ScreenContainer>
      }</>
  )
}

export default EditarCadastroPage

