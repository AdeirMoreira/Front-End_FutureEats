import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { login } from '../../services/LoginRequest/login'
import logo from "../../assets/Images/Logo.png"
import { InputsContainer, ScreenContainer } from '../LoginPage/styled'
import { Button, IconButton, TextField } from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControl } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { goToCadastro } from '../../routes/coordinators'


export default function LoginPage() {
  const navigate = useNavigate();
  const params = useContext(FutureEats)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(params.dataForm.loginData.form, navigate)
  }

  return (
    <>
      <ScreenContainer>
        <img src={logo} />
        <InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField
              name={"email"}
              value={params.dataForm.loginData.form.email}
              onChange={params.dataForm.loginData.onChange}
              required
              variant={"outlined"}
              label={"E-mail"}
              placeholder='email@email.com'
              fullWidth
              margin={"normal"}
            // inputProps={{ pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$' }}
            />

            <FormControl variant="outlined" style={{ width: '100%', marginTop: '15px', marginBottom: '15px' }}>
              <InputLabel>Senha</InputLabel>
              <OutlinedInput
                name={"password"}
                type={showPassword ? 'text' : 'password'}
                value={params.dataForm.loginData.form.password}
                onChange={params.dataForm.loginData.onChange}
                required
                inputProps={{ pattern: '^[a-zA-Z0-9]{6,}$' }}
                placeholder={'Mínimo 6 caracteres'}
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

            <Button style={{ width: '100%', marginTop: "5px", marginBottom: '15px', color: "black", textTransform: 'none' }}
              type={"submit"}
              variant={'contained'}
              color={'primary'}
              margin={'normal'}
            >Entrar</Button>
          </form>
          <Button style={{ color: "black", textTransform: 'none' }}
            onClick={() => goToCadastro(navigate)}
            fullWidth
            variant={'text'}
            margin={"normal"}
            type={"submit"}
          ><b>Não possui cadastro? Clique aqui.</b></Button>
        </InputsContainer>
      </ScreenContainer>
    </>
  )
}
