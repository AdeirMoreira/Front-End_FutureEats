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
import { Typography } from '@material-ui/core'

export default function SignUpPageAndress() {
    const navigate = useNavigate()
    const params = useContext(FutureEats)
    const [messageError, setMessageErro] = useState('')

    const preventDefault = (e) => {
        e.preventDefault()
        SignUpRequestAndress(params.dataForm.andressData.form, navigate, setMessageErro, params.dataForm.andressData.cleanFields)
    }

    return (

        <ScreenContainer>
            <div>
                <AppBar position="static" style={{ width: "100vw" }} >
                    <Toolbar variant="dense">
                        <IconButton onClick={() => goToBack(navigate)} edge="start" style={{ color: "black" }} aria-label="voltar">
                            <ArrowBackIos />
                        </IconButton>
                        <Typography variant="h6" style={{ color: "black" }} >
                            Cadastro Endereço
                        </Typography>
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

                </form>
            </InputsContainer>
        </ScreenContainer>



    )
}

