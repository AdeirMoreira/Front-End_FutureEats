import React from 'react'

export default function CartPage() {
  return (
    <div>
      <header>
        <h2>Meu Carrinho</h2>
      </header>
      <div>
        <h4>Endereço de Entrega:</h4>
        <p>Rua/Av:</p>
      </div>
      <div>
        <h4>Frete: R$</h4>
        <h4>SUBTOTAL: R$</h4>
      </div>
      <div>
        <select>
          <p>Forma de pagamento:</p>
          <option>Cartão</option>
          <option>Dinheiro</option>
        </select>
      </div>
    </div>
  )
}
