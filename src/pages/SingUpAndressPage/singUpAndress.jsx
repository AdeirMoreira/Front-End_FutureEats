import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FutureEats } from "../../globalState/Context"
import { SignUpRequestAndress } from "../../services/SignUp"
import { TextField } from "@material-ui/core"
import { InputsContainer, ScreenContainer, ErrorMessageContainer } from "../SingUpAndressPage/styled"
import { Button } from "@material-ui/core"
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { AppBar } from '@material-ui/core'
import { goToBack } from "../../routes/coordinators"
import { Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import alertImg from '../../assets/Images/alert.png'

export default function SignUpPageAndress() {
    const params = useContext(FutureEats)
    const navigate = useNavigate()
    const [messageError, setMessageErro] = useState('')

    const preventDefault = (e) => {
        e.preventDefault()
        SignUpRequestAndress(params.dataForm.andressData.form, navigate, setMessageErro)
    }

    return (

        <ScreenContainer>
            <div>
                <AppBar position="static" style={{ width: "100vw" }} >
                    <Toolbar variant="dense">
                        <IconButton onClick={() => goToBack(navigate)} edge="start" style={{ color: "black" }} aria-label="voltar">
                            <ArrowBackIos />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>

            <ErrorMessageContainer>
                {messageError &&
                    <>
                        <img src={alertImg} />
                        <p>{messageError}</p>
                    </>
                }
            </ErrorMessageContainer>

            <InputsContainer>
                <form onSubmit={preventDefault}>
                    <TextField
                        fullWidth
                        name="street"
                        value={params.dataForm.andressData.form.street}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Rua / AV'
                        variant={"outlined"}
                        label={"Logradouro"}
                        margin={"normal"}
                        required
                    />

                    <TextField
                        fullWidth
                        name="number"
                        type="number"
                        value={params.dataForm.andressData.form.number}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Número'
                        variant={"outlined"}
                        label={"Número"}
                        margin={"normal"}
                        required
                    />

                    <TextField
                        fullWidth
                        name="city"
                        value={params.dataForm.andressData.form.city}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Cidade'
                        variant={"outlined"}
                        label={"Cidade"}
                        margin={"normal"}
                        required
                    />
                    <TextField
                        fullWidth
                        name="neighbourhood"
                        value={params.dataForm.andressData.form.neighbourhood}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Bairro'
                        variant={"outlined"}
                        label={"Bairro"}
                        margin={"normal"}
                        required
                    />

                    <TextField
                        fullWidth
                        name="state"
                        value={params.dataForm.andressData.form.state}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Estado'
                        variant={"outlined"}
                        label={"Estado"}
                        margin={"normal"}
                        required
                    />

                    <TextField
                        fullWidth
                        name="complement"
                        value={params.dataForm.andressData.form.complement}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Apto / Bloco'
                        variant={"outlined"}
                        label={"Complemento"}
                        margin={"normal"}
                        required
                    />

                    <Button style={{ color: "black", textTransform: 'none', marginTop: "20px" }}
                        type={"submit"}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                        margin={'normal'}
                    >Enviar</Button>
                    {/* <label htmlFor='street'>Logadouro*
                        <input
                        id='street'
                        name='street' value={params.dataForm.andressData.form.street}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Rua / AV'
                        required />
                        </label>
                        <label htmlFor='number'>Número*
                        <input
                        id='number'
                        name='number' value={params.dataForm.andressData.form.number}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Número'
                        type="number"
                        required />
                        </label> 
                        <label htmlFor='city'>Cidade*
                        <input
                        id='city'
                        name='city' value={params.dataForm.andressData.form.city}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Cidade'
                        required />
                        </label> 
                        <label htmlFor='state'>Estado*
                        <input
                        id='state'
                        name='state' value={params.dataForm.andressData.form.state}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Estado'
                        required />
                        </label> 
                         <label htmlFor='Complemento'>Complemento*
                        <input
                        id='complement'
                        name='complement' value={params.dataForm.andressData.form.complement}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Apto / Bloco' />
                        </label> 
                        <button>enviar</button> */}

                </form>
            </InputsContainer>
        </ScreenContainer>



    )
}

