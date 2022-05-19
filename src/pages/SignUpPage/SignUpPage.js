import React, { useContext, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { SignUpRequest } from '../../services/SignUp'
import { useInput } from '../../Hooks/useInput'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const [confirm, handleValue] = useInput('')
  const [confirmed, setConfirmed] = useState(false)
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
      <h1>Future Eats</h1>
      <form onSubmit={preventDefault}>
        <label htmlFor='name'>Nome*
          <input
            id='name'
            name='name' value={params.dataForm.personalData.form.name}
            onChange={params.dataForm.personalData.onChange}
            placeholder='Nome e Sobreome'
            required />
        </label>
        <label htmlFor='email'>E-mail*
          <input
            id='email'
            name='email' value={params.dataForm.personalData.form.email}
            onChange={params.dataForm.personalData.onChange}
            placeholder='email@email.com'
            pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
            title='EX: email@provedor.com'
            required />
        </label>
        <label htmlFor='cpf'>CPF*
          <input
            id='cpf'
            name='cpf' value={params.dataForm.personalData.form.cpf}
            onChange={params.dataForm.personalData.onChange}
            placeholder='000.000.000-00'
            pattern='^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$'
            title='Use ponto e traço ao digitar o CPF EX: 000.000.000-00'
            required />
        </label>
        <label htmlFor=''>Senha*
          <input
            id='password'
            name='password' value={params.dataForm.personalData.form.password}
            onChange={params.dataForm.personalData.onChange}
            placeholder='Mínimo 6 caracteres'
            pattern='^[a-zA-Z0-9]{6,}$'
            title='Mínimo 6 caracteres entre letras e números'
            required />
        </label>
        <div>
          {confirmed && <p>A senha e a confirmação são diferentes</p>}
        </div>
        <label htmlFor='confirm'>Confirmar*
          <input
            id='confirm'
            name='confirm' value={confirm}
            onChange={handleValue}
            placeholder='Confirme a senha anterior'
            pattern='^[a-zA-Z0-9]{6,}$'
            title='Mínimo 6 caracteres entre letras e números'
            required />
        </label>
        <button>enviar</button>
      </form>
    </>
  )
}
