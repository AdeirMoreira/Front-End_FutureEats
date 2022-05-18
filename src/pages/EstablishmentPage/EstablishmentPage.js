import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FutureEats } from '../../globalState/Context'

import { getRestaurantDetails } from '../../services/RestaurantDetails'


export default function EstablishmentPage() {
  const params = useParams();
  const detail = useContext(FutureEats)

  useEffect(() => {
    getRestaurantDetails(detail.setRestDetail, params.id)
  }, [])

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

  return (
    <div>

      {/* <div>
      <p>Selecione a quatidade desejada:</p>
      <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <button> Adicionar ao carrinho </button>

    </div> */}

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
