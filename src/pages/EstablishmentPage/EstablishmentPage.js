import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'
import { getRestaurants } from '../../services/FeedPage';
import { getRestaurantDetails } from '../../services/RestaurantDetails'


export default function EstablishmentPage() {
  const params = useParams();
  const detail = useContext(FutureEats)

  const token = localStorage.getItem('token');

  useEffect(() => {
    getRestaurants(detail.rest, token)
    getRestaurantDetails(detail.setRestDetail, params.id)
  }, [])

  // const restaurants = detail.rest && detail.rest.map((restaurant) => {
  //   return (
  //     <div key={restaurant.id}>
  //       <img src={restaurant.logoUrl} alt="Logo restaurante" />
  //       <h3>{restaurant.name}</h3>
  //       <p>Tempo de entrega: {restaurant.deliveryTime}min</p>
  //       <p>Frete R${restaurant.shipping}</p>
  //     </div>
  //   )
  // })

  const restDetail = detail.restDetail && detail.restDetail.restaurant.products.map((list) => {
    return (
      <div key={list.id}>

        <p>Nome: {list.name}</p>
        <p>Preço: {list.price}</p>
        <img src={list.photoUrl} />
        <p>Descrição: {list.description}</p>
        <button> Adicionar </button>
      </div>
    )
  })
  console.log(detail)
  // console.log(detail.restDetail.restaurant.products)
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
