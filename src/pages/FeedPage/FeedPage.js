import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FutureEats } from '../../globalState/Context';
import { getRestaurants } from '../../services/FeedPage';
import { ListRestaurants } from './styled';

export default function FeedPage() {

  const token = localStorage.getItem('token');

  const params = useContext(FutureEats)

  useEffect(() => {
    getRestaurants(params.setRest, token)
  }, []);

  const listRestaurants = params.rest && params.rest.map((restaurants) => {
    return (
      <ListRestaurants key={restaurants.id}>
        <img src={restaurants.logoUrl} alt="Logo restaurante" />
        <h3>{restaurants.name}</h3>
        <p>Tempo de entrega: {restaurants.deliveryTime}min</p>
        <p>Frete R${restaurants.shipping}</p>
      </ListRestaurants>
    )
  });

  return (
    <div>
      <h1>FeedPage</h1>
      <div>
        {listRestaurants}
      </div>
    </div>
  )
};
