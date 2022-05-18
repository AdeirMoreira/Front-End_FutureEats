import React, { useContext } from 'react'
import { FutureEats } from '../../globalState/Context'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import { goToBack } from '../../routes/coordinators'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'


const EditarCadastroPage = () =>{
const navigate=useNavigate()

const params = useContext(FutureEats)

  const onSubmitForm = (event) =>{
    event.preventDefault()

  }
  return (
      <ScreenContainer>
        <button onClick={()=>goToBack(navigate)}>voltar</button>
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

export default EditarCadastroPage
