import React, { useContext } from 'react'
import { FutureEats } from '../../globalState/Context'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField, Button } from '@material-ui/core'

import useForm from '../../Hooks/useForm'


const EditarEndereco = () =>{

const params = useContext(FutureEats)

  const onSubmitForm = (event) =>{
    event.preventDefault()

  }
  return (
      <ScreenContainer>
        <h3>Editar Endereço</h3>
      <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
        name={"street"}
        value={params.dataForm.editAddressData.form.street}
        onChange={params.dataForm.editAddressData.onChange}
        label={"Logradouro"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
         <TextField
        name={"number"}
        value={params.dataForm.editAddressData.form.email}
        onChange={params.dataForm.editAddressData.onChange}
        label={"Número"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
         <TextField
        name={"neighbourhood"}
        value={params.dataForm.editAddressData.form.neighbourhood}
        onChange={params.dataForm.editAddressData.onChange}
        label={"Bairro"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
        <TextField
        name={"city"}
        value={params.dataForm.editAddressData.form.city}
        onChange={params.dataForm.editAddressData.onChange}
        label={"Cidade"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
         <TextField
        name={"state"}
        value={params.dataForm.editAddressData.form.state}
        onChange={params.dataForm.editAddressData.onChange}
        label={"Estado"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        />
        <TextField
        name={"complement"}
        value={params.dataForm.editAddressData.form.complement}
        onChange={params.dataForm.editAddressData.onChange}
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
  )
}

export default EditarEndereco
