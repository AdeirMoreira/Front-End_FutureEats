import React, { useContext, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { SignUpRequest } from '../../services/SignUp'
import { useInput } from '../../Hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { InputsContainer, ScreenContainer } from '../SignUpPage/style'
import { IconButton, TextField } from '@material-ui/core'
import { Button } from "@material-ui/core"
import logo from "../../assets/Images/Logo.png"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControl } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'



export default function SignUpPage() {
  const [confirm, handleValue] = useInput('')
  const [confirmed, setConfirmed] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const params = useContext(FutureEats)
  const navigate = useNavigate()


  const preventDefault = (event) => {
    event.preventDefault()
    if (params.dataForm.personalData.form.password === confirm) {
      SignUpRequest(params.dataForm.personalData.form, navigate)
    } else {
      setConfirmed(true)
    }
  }


  return (
    <>
      <ScreenContainer>
        <img src={logo} />
        <p>Cadastrar</p>
        <InputsContainer>
          <form onSubmit={preventDefault}>

            <TextField element={<Button></Button>}
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
              label={"E-mail"}
              variant={"outlined"}
              inputProps={{ pattern: '^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$' }}
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
                inputProps={{ pattern: '^[a-zA-Z0-9]{6,}$' }}
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

            <>
              {confirmed && <p>A senha e a confirmação são diferentes</p>}
            </>

            <FormControl variant="outlined" style={{ width: '100%', marginTop: '10px', marginBottom: '25px' }}>
              <InputLabel>Confirmar</InputLabel>
              <OutlinedInput
                name={confirm}
                type={showPassword ? 'text' : 'password'}
                value={confirm}
                onChange={handleValue}
                required
                inputProps={{ pattern: '^[a-zA-Z0-9]{6,}$' }}
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

            <Button
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
