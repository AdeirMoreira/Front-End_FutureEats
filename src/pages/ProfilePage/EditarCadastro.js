import React, { useContext } from 'react'
import { FutureEats } from '../../globalState/Context'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField, Button } from '@material-ui/core'

import useForm from '../../Hooks/useForm'


const EditarCadastro = () =>{

const params = useContext(FutureEats)

  const onSubmitForm = (event) =>{
    event.preventDefault()

  }
  return (
      <ScreenContainer>
        <h3>Editar Cadastro</h3>
      <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
        name={"name"}
        value={params.dataForm.editPersonalData.form.name}
        onChange={params.dataForm.editPersonalData.onChange}
        label={"Nome"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
         <TextField
        name={"email"}
        value={params.dataForm.editPersonalData.form.email}
        onChange={params.dataForm.editPersonalData.onChange}
        label={"E-mail"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
         <TextField
        name={"cpf"}
        value={params.dataForm.editPersonalData.form.cpf}
        onChange={params.dataForm.editPersonalData.onChange}
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
  )
}

export default EditarCadastro
