import React, { useContext, useEffect, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import { goToBack } from '../../routes/coordinators'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { getEditRegister} from '../../services/ProfilePage'
import {SignUpRequest} from '../../services/SignUp'


const EditarCadastroPage = () =>{
const navigate=useNavigate()
const [editRegister, setEditRegister] = useState()

useEffect (()=>{
  getEditRegister(setEditRegister, setForm)
},[])
const { form, onChange, cleanFields, setForm} = useForm({
  name:"",
  email:"",
  cpf:""
  })

  const onSubmitForm = (event) =>{
    event.preventDefault()
    SignUpRequest(form)
  }
  return (
    <>
    {editRegister &&
      <ScreenContainer>
        <button onClick={()=>goToBack(navigate)}>voltar</button>
        <h3>Editar Cadastro</h3>
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
        <Button
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

export default EditarCadastroPage
