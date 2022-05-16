import React, { useContext } from 'react'
import { FutureEats } from '../../globalState/Context'

export default function SignUpPage() {
  const params = useContext(FutureEats)

  const preventDefault = (e) => {
    e.preventDefault()
    console.log(params.dataForm.personalData.form)
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
            required />
        </label>
        <label htmlFor='cpf'>CPF*
          <input
            id='cpf'
            name='cpf' value={params.dataForm.personalData.form.cpf}
            onChange={params.dataForm.personalData.onChange}
            placeholder='000.000.000-00'
            required />
        </label>
        <label htmlFor=''>Senha*
          <input
            id='password'
            name='password' value={params.dataForm.personalData.form.password}
            onChange={params.dataForm.personalData.onChange}
            placeholder='Mínimo 6 caracteres'
            required />
        </label>
        {/* <label htmlFor='confirm'>Confirmar*
          <input
            id='confirm'
            name='confirm' value={params.dataForm.personalData.form.password}
            onChange={params.dataForm.personalData.onChange}
            placeholder='Confirme a senha anterior'
            required />
        </label> */}
        <button>enviar</button>
      </form>
    </>


  )
}
