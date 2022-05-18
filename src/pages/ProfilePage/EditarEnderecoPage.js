import React, { useContext, useEffect } from 'react'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import { goToBack } from '../../routes/coordinators'
import { getFullAddress } from '../../services/ProfilePage'
import { useState } from 'react'
import {SignUpRequestAndress} from '../../services/SignUp'

import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'


const EditarEnderecoPage = () =>{
const navigate =useNavigate()
const [fullAddress, setFullAddress] = useState()


useEffect (()=>{
  getFullAddress(setFullAddress, setForm)
  
},[])
const { form, onChange, cleanFields, setForm } = useForm({
  street:"",
  number:"", neighbourhood:"", city:"", state: "", complement:""})


  const onSubmitForm = (event) =>{
    event.preventDefault()
    SignUpRequestAndress(form)

  }
  return (
    <>
    {fullAddress &&
      <ScreenContainer>
        <button onClick={()=>goToBack(navigate)}>voltar</button>
        
        <h3>Editar Endereço</h3>
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

export default EditarEnderecoPage
