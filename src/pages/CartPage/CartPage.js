import React, { useContext, useEffect, useState } from 'react'
import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services/ProfilePage'
import { ProductsCard } from '../../Components/ProductsCard/ProductCard'
import { useInput } from '../../Hooks/useInput'
import { PlaceOrder } from '../../services/Cart'
import Footer from '../../Components/Footer/Footer'
import * as container from './styles'
import { Button } from '@material-ui/core'
import XButton from '../../assets/Images/xbox.png'


export default function CartPage() {
  const parms = useContext(FutureEats)
  const [Price, setPrice] = useState()
  const [paymentMethod, handlePaymentMethod] = useInput('')
  const [showPopUp, setShowPopUp] = useState(false)

  useEffect(() => getProfile(parms.setUser), [])
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
    if (paymentMethod) {
      const products = parms.cart.map(e => {
        return { id: e.id, quantity: e.quantity }
      })
      const body = { products, paymentMethod }
      console.log(body)
      PlaceOrder(parms.restDetail.restaurant.id, body)
    } else {
      setShowPopUp(true)
    }
  }

  return (
    <container.FullScreen>
      <header>
        <h2>Meu Carrinho</h2>
      </header>
      {parms.user &&
        <div style={{ padding: '16px' }}>
          <container.Address>
            <p>Endereço de Entrega</p>
            <p>{parms.user.address}</p>
          </container.Address>
          {parms.cart.length > 0 ?
            <>
              <container.RestaurtData>
                <p>{parms.restDetail.restaurant.name}</p>
                <p>{parms.restDetail.restaurant.address}</p>
                <p>{parms.restDetail.restaurant.deliveryTime} Minutos</p>
              </container.RestaurtData>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <ProductsCard
                  products={parms.cart}
                  twoFunction={''}
                  category={'Pricipais'}
                  removeProduct={removeProducToCart}
                />
              </div>
            </> :
            <container.Vazio><p>Carrinho Vazio</p></container.Vazio>}
        </div>
      }
      <container.Invoicing >
        <container.Freight>Frete:R${parms.cart.length === 0 ? '0,00' :
          parms.restDetail.restaurant.shipping.toFixed(2).replace('.', ',')}
        </container.Freight>
        <container.TotalPrice>
          <span>SUBTOTAL</span>
          <span>R${Price !== undefined ? Price.toFixed(2).replace('.', ',') : '0,00'}</span>
        </container.TotalPrice>
        <container.Paymentmethod>
          <p>Forma de Pagamento</p>
          <container.Line></container.Line>
          <container.Radio>
            <input type='radio' id='money' value={'money'} name={'paymentMetod'} onChange={handlePaymentMethod} />
            <label htmlFor='money'>Dinheiro</label>
          </container.Radio>
          <container.Radio>
            <input type='radio' id='creditcard' value={'creditcard'} name={'paymentMetod'} onChange={handlePaymentMethod} />
            <label htmlFor='creditcard'>Cartão de Crédito</label>
          </container.Radio>
        </container.Paymentmethod>
        <container.Teste>
          <Button onClick={buildBodyRequest} color={'primary'} fullWidth variant='contained' >Confirmar</Button>
        </container.Teste>
      </container.Invoicing>
      {showPopUp &&
        <container.PopUp>
          <container.MessagePopUP>
            <button onClick={() => setShowPopUp(false)}><img src={XButton} /></button>
            <p>Selecione um metodo de Pagamento</p>
          </container.MessagePopUP>
        </container.PopUp>
      }
      <Footer />
    </container.FullScreen>
  )
}
