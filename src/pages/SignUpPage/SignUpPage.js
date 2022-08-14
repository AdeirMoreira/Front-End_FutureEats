import React, { useContext, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { SignUpRequest } from '../../services/SignUp'
import { useInput } from '../../Hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { InputsContainer, ScreenContainer, ErrorMessageContainer } from '../SignUpPage/style'
import { IconButton, TextField, Toolbar } from '@material-ui/core'
import { Button } from "@material-ui/core"
import logo from "../../assets/Images/Logo.png"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControl } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { AppBar } from '@material-ui/core'
import { goToBack } from "../../routes/coordinators"
import alertImg from '../../assets/Images/alert.png'
import { Typography } from '@material-ui/core'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [confirm, handleValue] = useInput('')
  const [showPassword, setShowPassword] = useState(false)
  const [messageError, setMessageErro] = useState('')
  const params = useContext(FutureEats)

  const preventDefault = (event) => {
    event.preventDefault()
    const upDatedForm = updatedForm(params.dataForm.personalData.form)
    if (upDatedForm.password === confirm) {
      messageError && setMessageErro('')
      SignUpRequest(upDatedForm, navigate, setMessageErro, params.dataForm.personalData.cleanFields)
    } else {
      setMessageErro('A senha e a confirmação não são iguais')
    }
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
      <ScreenContainer>
        <div>
          <AppBar position="static" style={{ width: "100vw" }} >
            <Toolbar variant="dense">
              <IconButton onClick={() => goToBack(navigate)} edge="start" style={{ color: "black" }} aria-label="voltar">
                <ArrowBackIos />
              </IconButton>
              <Typography variant="h6" style={{ color: "black" }} >
                Cadastro Perfil
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <img src={logo} alt='logo Future Eats' />

        <ErrorMessageContainer>
          {messageError &&
            <>
              <img src={alertImg} alt='ícone de alerta' />
              <b><p>{messageError}</p></b>
            </>
          }
        </ErrorMessageContainer>

        <InputsContainer>
          <form onSubmit={preventDefault}>

            <TextField
              name={"name"}
              value={params.dataForm.personalData.form.name}
              onChange={params.dataForm.personalData.onChange}
              label={"Nome"}
              variant={"outlined"}
              placeholder={"Nome e sobrenome"}
              fullWidth
              margin={"normal"}
              required
            />

            <TextField
              name={"email"}
              value={params.dataForm.personalData.form.email}
              onChange={params.dataForm.personalData.onChange}
              type={'email'}
              label={"E-mail"}
              variant={"outlined"}
              placeholder={"email@email.com"}
              fullWidth
              margin={"normal"}
              required
            />

            <TextField
              name={"cpf"}
              value={params.dataForm.personalData.form.cpf}
              onChange={params.dataForm.personalData.onChange}
              label={"CPF"}
              inputProps={{ pattern: "([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" }}
              variant={"outlined"}
              placeholder={"000.000.000-00"}
              fullWidth
              margin={"normal"}
              required
            />

            <FormControl variant="outlined" style={{ width: '100%', marginTop: '15px', marginBottom: '15px' }}>
              <InputLabel>Senha</InputLabel>
              <OutlinedInput
                name={"password"}
                type={showPassword ? 'text' : 'password'}
                value={params.dataForm.personalData.form.password}
                onChange={params.dataForm.personalData.onChange}
                required
                inputProps={{ pattern: '(^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$)' }}
                placeholder={'Mínimo 6 caracteres entre letras e números'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={e => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={50}
              />
            </FormControl>

            <FormControl variant="outlined" style={{ width: '100%', marginTop: '10px', marginBottom: '25px' }}>
              <InputLabel>Confirmar</InputLabel>
              <OutlinedInput
                name={confirm}
                type={showPassword ? 'text' : 'password'}
                value={confirm}
                onChange={handleValue}
                required
                inputProps={{ pattern: "(^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$)" }}
                placeholder={'Confirme a senha anterior'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={e => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />

            </FormControl>
            <Button style={{ color: "black", textTransform: 'none' }}
              type={"submit"}
              fullWidth
              variant={'contained'}
              color={'primary'}
              margin={'normal'}
            >Criar</Button>

          </form>
        </InputsContainer>

      </ScreenContainer>
    </>
  )
}
