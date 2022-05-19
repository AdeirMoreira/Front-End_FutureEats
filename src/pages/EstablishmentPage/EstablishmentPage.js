import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { getRestaurantDetails } from '../../services/RestaurantDetails'
import { useInput } from '../../Hooks/useInput'
import { ContainerPopUp, ContainerSelectQuantidade } from './styles'


export default function EstablishmentPage() {
  const params = useParams();
  const detail = useContext(FutureEats)
  const [quantidade, handleQuantidade, clearInput] = useInput('')
  const [displawPopUp, setPopUp] = useState(false)
  const [productsInCart, setProductInCat] = useState([])

  useEffect(() => getRestaurantDetails(detail.setRestDetail, params.id), [])

  const showPopUpFunction = () => displawPopUp ? setPopUp(false) : setPopUp(true)

  const addProduct = (products) => {

    const product = {
      id: products.id,
      quantity: quantidade
    }
    const newCart = [...detail.cart, product]
    detail.setCart(newCart)
    clearInput()
    console.log(detail.cart)
  }

  const remover = (products) => {
    const cart = detail.cart
    const newCard = cart.filter(e => e.id !== products.id)
    detail.setCart(newCard)
  }

  const twoFunction = (product) => {
    showPopUpFunction()
    addProduct(product)
  }

  const twoFunctionRemover = (product) => {
    showPopUpFunction(product)
    remover(product)
  }

  const restDetail = detail.restDetail && detail.restDetail.restaurant.products.map((list) => {
    return (
      <div key={list.id}>
        <p>Nome: {list.name}</p>
        <p>Preço: {list.price}</p>
        <img src={list.photoUrl} />
        <p>Descrição: {list.description}</p>
        {productsInCart.includes(list.id) ?
          <button onClick={twoFunctionRemover(list)}> Remover </button>
          :
          <button onClick={showPopUpFunction}> Adicionar </button>
        }

        {displawPopUp && <ContainerPopUp>
          <ContainerSelectQuantidade>
            <p>Selecione a quantidade desejada</p>
            <select onChange={handleQuantidade} name='quantidade' id='quantidade' value={quantidade} required>
              <option value='' disabled>0</option>
              <option value={1} key={1}>1</option>
              <option value={2} key={2}>2</option>
              <option value={3} key={3}>3</option>
              <option value={4} key={4}>4</option>
              <option value={5} key={5}>5</option>
              <option value={6} key={6}>6</option>
              <option value={7} key={7}>7</option>
              <option value={8} key={8}>8</option>
              <option value={9} key={9}>9</option>
              <option value={10} key={10}>10</option>
            </select>
            <button onClick={() => twoFunction(list)} >Adicionar ao Carrinho</button>
          </ContainerSelectQuantidade>
        </ContainerPopUp>}
      </div>
    )
  })

  return (
    <div>
      {detail.restDetail &&
        <>
          <p>{detail.restDetail.restaurant.name}</p>
          <p>{detail.restDetail.restaurant.category}</p>
          <p>{detail.restDetail.restaurant.deliveryTime} minutos  Frete: R$ {detail.restDetail.restaurant.shipping}</p>
          <p>{detail.restDetail.restaurant.address}</p>
        </>
      }
      {restDetail}
    </div>
  )
}
