import React, { useEffect } from 'react'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import { goToBack } from '../../routes/coordinators'
import { getEditAddress } from '../../services/ProfilePage'
import { useState } from 'react'
import { SignUpRequestAndress } from '../../services/SignUp'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useProtectPage } from '../../Hooks/useProtectedPage'


const EditarEnderecoPage = () => {
  const navigate = useNavigate()
  useProtectPage(navigate)
  const [editAddress, setEditAddress] = useState()

  const { form, onChange, cleanFields, setForm } = useForm({
    street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""
  })

  useEffect(() => {
    getEditAddress(setEditAddress, setForm)
  }, [setForm])



  const onSubmitForm = (event) => {
    event.preventDefault()
    SignUpRequestAndress(form, navigate, undefined, cleanFields, 'adreess',)
  }
  return (
    <>
      {editAddress &&
        <ScreenContainer>

          <AppBar position="static" style={{ width: "100vw" }} >
            <Toolbar variant="dense">
              <IconButton onClick={() => goToBack(navigate)} edge="start" style={{ color: "black" }} aria-label="voltar">
                <ArrowBackIos />
              </IconButton>
              <Typography variant="h6" style={{ color: "black" }} >
                Editar Endereço
              </Typography>
            </Toolbar>
          </AppBar>

          <InputsContainer>
            <form onSubmit={onSubmitForm}>
              <TextField
                name={"street"}
                value={form.street}
                onChange={onChange}
                label={"Logradouro"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"number"}
                value={form.number}
                onChange={onChange}
                label={"Número"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                label={"Bairro"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"city"}
                value={form.city}
                onChange={onChange}
                label={"Cidade"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"state"}
                value={form.state}
                onChange={onChange}
                label={"Estado"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <TextField
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                label={"Complemento"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
              />
              <Button style={{ color: "black", textTransform: "none", marginTop: "15px" }}
                type={"submit"}
                fullWidth
                variant={'contained'}
                color={'primary'}
                margin={'normal'}
              >Alterar</Button>
            </form>
          </InputsContainer>
        </ScreenContainer>
      }</>
  )
}

export default EditarEnderecoPage
