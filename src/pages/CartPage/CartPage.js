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
import { getActiveOrder } from '../../services/FeedPage'
import Header from '../../Components/Header/Header'
import { useProtectPage } from '../../Hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'


export default function CartPage() {
  const navigate = useNavigate()
  useProtectPage(navigate)
  const params = useContext(FutureEats)
  const [Price, setPrice] = useState()
  const [paymentMethod, handlePaymentMethod] = useInput('')
  const [showPopUp, setShowPopUp] = useState(false)
  const [popUp, setMessage] = useState('')

  useEffect(() => getProfile(params.setUser), [])
  useEffect(() => getActiveOrder(params.setOrder), [])
  useEffect(() => activeOrderAlert(), [])
  useEffect(() => calculePrice(params.cart), [params.cart])

  const activeOrderAlert = () => {
    if (params.order) {
      params.setCart([])
      setMessage(`Desculpe, só é possível ter um pedido ativo por vez, tente novamente 
      quando seu pedido atual estiver concluído`)
      setShowPopUp(true)
    }
  }

  const calculePrice = () => {
    const price = params.cart.reduce((a, e) => a += e.price * e.quantity, 0)
    setPrice(price)
  }
  const removeProducToCart = (product) => {
    const newCart = params.cart.filter(e => product.id !== e.id)
    params.setCart(newCart)
  }

  const buildBodyRequest = () => {
    if (paymentMethod) {
      const products = params.cart.map(e => {
        return { id: e.id, quantity: e.quantity }
      })
      const body = { products, paymentMethod }
      PlaceOrder(params.restDetail.restaurant.id, body, cleanCart)
    } else {
      noPaymentMethod()
    }
  }

  const cleanCart = () => {
    params.setCart([])
    setMessage('Seu pedido está sendo preparado, em breve chegará na sua casa')
    setShowPopUp(true)
    getActiveOrder(params.setOrder)
  }

  const noPaymentMethod = () => {
    setMessage('Selecione um método de pagamento')
    setShowPopUp(true)
  }

  const checkCart = () => {
    if (params.cart.length > 0) {
      buildBodyRequest()
    } else if (params.order) {
      params.setCart([])
      setMessage(`Desculpe, só é possível ter um pedido ativo por vez, tente novamente 
      quando seu pedido atual estiver concluído`)
      setShowPopUp(true)
    } else {
      setMessage('Seu carrinho está vazio')
      setShowPopUp(true)
    }
  }

  return (
    <container.FullScreen>
      <Header
        setUser={params.setUser}
        setRestDetail={params.setRestDetail}
        setHistory={params.setHistory}
        setRest={params.setRest}
        setOrder={params.setOrder}
        setCart={params.setCart} />

      {params.user &&
        <div style={{ padding: '16px' }}>
          <container.Address>
            <p>Endereço de entrega</p>
            <p>{params.user.address}</p>
          </container.Address>
          {params.cart.length > 0 ?
            <>
              <container.RestaurtData>
                <p>{params.restDetail.restaurant.name}</p>
                <p>{params.restDetail.restaurant.address}</p>
                <p>{params.restDetail.restaurant.deliveryTime} Minutos</p>
              </container.RestaurtData>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <ProductsCard
                  products={params.cart}
                  twoFunction={''}
                  category={'Pricipais'}
                  removeProduct={removeProducToCart}
                />
              </div>
            </> :
            <container.Vazio><p><b>Carrinho Vazio</b></p></container.Vazio>}
        </div>
      }
      <container.Invoicing >
        <container.Freight><b>Frete R${params.cart.length === 0 ? '0,00' :
          params.restDetail.restaurant.shipping.toFixed(2).replace('.', ',')}</b>
        </container.Freight>
        <container.TotalPrice>
          <span>SUBTOTAL</span>
          <span>R${Price !== undefined ? Price.toFixed(2).replace('.', ',') : '0,00'}</span>
        </container.TotalPrice>
        <container.Paymentmethod>
          <b><p>Forma de Pagamento</p></b>
          <container.Line></container.Line>
          <container.Radio>
            <input type='radio' id='money' value={'money'} name={'paymentMetod'} onChange={handlePaymentMethod} />
            <b><label htmlFor='money'>Dinheiro</label></b>
          </container.Radio>
          <container.Radio>
            <input type='radio' id='creditcard' value={'creditcard'} name={'paymentMetod'} onChange={handlePaymentMethod} />
            <b><label htmlFor='creditcard'>Cartão de Crédito</label></b>
          </container.Radio>
        </container.Paymentmethod>
        <container.Teste>
          <Button style={{ color: "black", textTransform: 'none' }} onClick={checkCart} color={'primary'} fullWidth variant='contained' >Confirmar</Button>
        </container.Teste>
      </container.Invoicing>
      {showPopUp &&
        <container.PopUp>
          <container.MessagePopUP>
            <button onClick={() => setShowPopUp(false)}><img src={XButton} /></button>
            <p>{popUp}</p>
          </container.MessagePopUP>
        </container.PopUp>
      }
      <Footer />
    </container.FullScreen>
  )
}
