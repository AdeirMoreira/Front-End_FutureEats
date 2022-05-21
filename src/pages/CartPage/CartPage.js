import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services/ProfilePage'
import { ProductsCard } from '../../Components/ProductsCard'
import { useInput } from '../../Hooks/useInput'
import { PlaceOrder } from '../../services/Cart'
import Footer from '../../Components/Footer/Footer'

export default function CartPage() {
  const parms = useContext(FutureEats)
  const [Price, setPrice] = useState()
  const [paymentMethod, handlePaymentMethod] = useInput('')
  console.log(parms.cart)

  useEffect(() => !parms.user && getProfile(parms.setUser), [])
  useEffect(() => calculePrice(parms.cart), [parms.cart])

  const calculePrice = () => {
    const price = parms.cart.reduce((a, e) => a += e.price * e.quantity, 0)
    setPrice(price)
  }
  const removeProducToCart = (product) => {
    const newCart = parms.cart.filter(e => product.id !== e.id)
    parms.setCart(newCart)
  }

  const buildBodyRequest = () => {
    const products = parms.cart.map(e => {
      return { id: e.id, quantity: e.quantity }
    })
    const body = { products, paymentMethod }
    console.log(body)
    PlaceOrder(parms.restDetail.restaurant.id, body)
  }

  return (
    <>
      <Link to={-1}> voltar</Link>
      <header>
        <h2>Meu Carrinho</h2>
      </header>
      {(parms.user && parms.restDetail && parms.cart) &&
        <>
          <div>
            <h4>Endereço de Entrega</h4>
            <p>{parms.user.address}</p>
          </div>
          <div>
            <p>{parms.restDetail.restaurant.name}</p>
            <p>{parms.restDetail.restaurant.address}</p>
            <p>{parms.restDetail.restaurant.deliveryTime} Minutos</p>
          </div>
          <div>
            <ProductsCard
              products={parms.cart}
              twoFunction={''}
              category={'Pricipais'}
              removeProduct={removeProducToCart}
            />
          </div>
          {parms.restDetail.restaurant.shipping && <p>Frete:R${parms.restDetail.restaurant.shipping}</p>}
          <div>
            <p>SubTotal</p>
            {Price && <p>R${Price.toFixed(2).replace('.', ',')}</p>}
          </div>
          <div>
            <p>Forma de Pagamento</p>
            <input type='radio' id='money' value={'money'} name={'paymentMetod'} onChange={handlePaymentMethod} />
            <label for='money'>Dinheiro</label>
            <input type='radio' id='creditcard' value={'creditcard'} name={'paymentMetod'} onChange={handlePaymentMethod} />
            <label for='creditcard'>Cartão de Crédito</label>
          </div>
          <button onClick={buildBodyRequest} >Confirmar</button>
          <Footer />
        </>
      }
    </>
  )
}
