import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { login } from '../../services/LoginRequest/login'

export default function LoginPage() {
  const navigate = useNavigate();

  const params = useContext(FutureEats)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(params.dataForm.loginData.form, navigate)
    
}

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={onSubmitForm}>
        <input
          name='email'
          value={params.dataForm.loginData.form.email}
          onChange={params.dataForm.loginData.onChange}
          required
          placeholder='email'
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="O email deve ter o seguinte formato: exemplo@provedor.com"
          type='email'
        />

        <input
          name='password'
          value={params.dataForm.loginData.form.password}
          onChange={params.dataForm.loginData.onChange}
          required
          placeholder='senha'
          title="Senha deve ter entre 6 e 30 caracteres entre letras e números"
          type='password'
        />


        <button> Bora comer! </button>
      </form>

      <Link to="/cadastro" ><button> Cadastre-se!</button></Link>
    </div>
  )
}
