import React, { useContext } from "react"
import { FutureEats } from "../../globalState/Context"


export default function SignUpPageAndress() {
    const params = useContext(FutureEats)

    const preventDefault = (e) => {
        e.preventDefault()
        console.log(params.dataForm.andressData.form)
    }

    return (
        <>
            <h1>Future Eats</h1>
            <form onSubmit={preventDefault}>
                <label htmlFor='street'>Logadouro*
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
                        required />
                </label>
                <label htmlFor='neighbourhood'>Bairro*
                    <input
                        id='neighbourhood'
                        name='neighbourhood' value={params.dataForm.andressData.form.neighbourhood}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Bairro'
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
                <label htmlFor='Complemento'>Confirmar*
                    <input
                        id='complement'
                        name='complement' value={params.dataForm.andressData.form.complement}
                        onChange={params.dataForm.andressData.onChange}
                        placeholder='Apto / Bloco'
                        required />
                </label>
                <button>enviar</button>
            </form>
        </>


    )
}
