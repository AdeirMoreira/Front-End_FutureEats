import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { getProfile } from '../../services/ProfilePage'
import { ProductsCard } from '../../Components/ProductsCard'

export default function CartPage() {
  const parms = useContext(FutureEats)
  const [cart, setCart] = useState([])

  const addPropertyInCart = (array) => {
    const newState = array.map(e => {
      return { ...e, inCart: true }

    })
    setCart(newState)
  }

  useEffect(() => getProfile(parms.setUser), [])
  useEffect(() => addPropertyInCart(parms.cart), [])

  // console.log(parms.restDetail)
  // console.log(parms.cart)

  const removeProducToCart = (product) => {
    const newCart = parms.cart.filter(e => product.id !== e.id)
    parms.setCart(newCart)
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
              products={cart}
              twoFunction={''}
              category={'Pricipais'}
              removeProduct={removeProducToCart}
            />
          </div>
        </>
      }
    </>
  )
}
