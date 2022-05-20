import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { getRestaurantDetails } from '../../services/RestaurantDetails'
import { useInput } from '../../Hooks/useInput'
import * as container from './styles'
import { ProductsCard } from '../../Components/ProductsCard'
import { PopUpQuantity } from '../../Components/PopUpQuantity'
import Header from '../../Components/Header/Header'
import time from '../../assets/Images/time.png';
import delivery from '../../assets/Images/delivery.png';

export default function EstablishmentPage() {
  const params = useParams();
  const detail = useContext(FutureEats)
  const [quantidade, handleQuantidade, clearInput] = useInput('')
  const [displawPopUp, setPopUp] = useState(false)
  const [productId, setProductid] = useState()
  const [Principais, setPrincipais] = useState([])
  const [Acompanhamento, setAcompanhamento] = useState([])

  useEffect(() => getRestaurantDetails(detail.setRestDetail, params.id), [])
  useEffect(() => detail.restDetail && addPropertyInCart(detail.restDetail.restaurant.products)
    , [detail.restDetail])

  const addPropertyInCart = (array) => {
    const newState = array.map(e => {
      return { ...e, inCart: false }

    })
    separar(newState)
  }

  const separar = (e) => {
    const principal = []
    const acompanhamentos = []
    e.map(e => {
      if (e.category === 'Pizza' || e.category === 'Refeição' || e.category === 'Lanche' ||
        e.category === 'Pastel' || e.category === 'Salgado') {
        principal.push(e)
      } else {
        acompanhamentos.push(e)
      }
    })
    setPrincipais(principal)
    setAcompanhamento(acompanhamentos)
  }

  const UpdateProductCard = (products, category) => {
    if (category === 'Principais') {
      const newPrincipal = Principais.map(e => products.id === e.id ? { ...e, inCart: e.inCart ? false : true } : e)
      setPrincipais(newPrincipal)
      setProductid(products.id)
    } else {
      const newAcompanhamento = Acompanhamento.map(e => products.id === e.id ? { ...e, inCart: e.inCart ? false : true } : e)
      setAcompanhamento(newAcompanhamento)
      setProductid(products.id)
    }
  }

  const addProduct = (products, category) => {
    const product = {
      products: products.products
    }
    const newCart = [...detail.cart, products]
    UpdateProductCard(products, category)
    detail.setCart(newCart)
    clearInput()
  }

  const removeProduct = (product, category) => {
    const newCart = detail.cart.filter(e => product.id !== e.id)
    detail.setCart(newCart)
    UpdateProductCard(product, category)
  }

  const addProductQuantity = (id) => {
    const newCart = detail.cart.map(e => id === e.id ? { ...e, quantity: quantidade, inCart: true } : e)
    detail.setCart(newCart)
  }

  const twoFunctionClose = (id) => {
    addProductQuantity(id)
    showPopUpFunction()
  }

  const twoFunctionOpen = (product, category) => {
    showPopUpFunction()
    addProduct(product, category)
  }

  const showPopUpFunction = () => displawPopUp ? setPopUp(false) : setPopUp(true)

  return (
    <div>
      <Header />
      <container.FullScreen>
        {detail.restDetail &&
          <container.RestaurantData>
            <container.RestaurantLogoImg src={detail.restDetail.restaurant.logoUrl} />
            <container.RestName>{detail.restDetail.restaurant.name}</container.RestName>
            <container.Paragrafo>{detail.restDetail.restaurant.category}</container.Paragrafo>
            <container.Freight>
              <container.Paragrafo><img src={time} /> {detail.restDetail.restaurant.deliveryTime} min</container.Paragrafo>
              <container.Paragrafo><img src={delivery} /> Frete R${detail.restDetail.restaurant.shipping}</container.Paragrafo>
            </container.Freight>
            <container.Paragrafo>{detail.restDetail.restaurant.address}</container.Paragrafo>
          </container.RestaurantData>
        }
        <container.AllCards>
          <h3>Principais</h3>
          <container.Line>
          </container.Line>
          <ProductsCard
            products={Principais}
            twoFunction={twoFunctionOpen}
            category={'Principais'}
            removeProduct={removeProduct}
          />
        </container.AllCards>
        <container.AllCards>
          <h3>Acompanhamentos</h3>
          <container.Line>
          </container.Line>
          <ProductsCard
            products={Acompanhamento}
            twoFunction={twoFunctionOpen}
            category={'Acompanhamentos'}
            removeProduct={removeProduct}
          />
        </container.AllCards>
        {showPopUpFunction &&
          <PopUpQuantity
            displawPopUp={displawPopUp}
            handleQuantidade={handleQuantidade}
            quantidade={quantidade}
            twoFunction={twoFunctionClose}
            id={productId}
          />
        }
      </container.FullScreen>
    </div>
  )
}
