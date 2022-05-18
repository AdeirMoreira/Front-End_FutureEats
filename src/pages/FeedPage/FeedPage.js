import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FutureEats } from '../../globalState/Context';
import { getRestaurants } from '../../services/FeedPage';
import { ListRestaurants } from './styled';
import { goToRestDetails } from '../../routes/coordinators';

export default function FeedPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const params = useContext(FutureEats)

  const [search,setSearch ] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  useEffect(() => {
    getRestaurants(params.setRest, token)
  }, []);
  
  const listRestaurants = params.rest && params.rest.filter( (buscar) =>{
    return (
      buscar.name.toUpperCase().includes(search.toUpperCase())
    )
  })
  
  .map((restaurants) => {
    return (
      <ListRestaurants onClick={() => goToRestDetails(navigate, restaurants.id)} key={restaurants.id}>
        <img src={restaurants.logoUrl} alt="Logo restaurante" />
        <h3>{restaurants.name}</h3>
        <p>Tempo de entrega: {restaurants.deliveryTime}min</p>
        <p>Frete R${restaurants.shipping}</p>
      </ListRestaurants>
    )
  })

  return (
    <div>
      <div>
        <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder='Buscar'
        required
        
        />
      </div>
      <h1>FeedPage</h1>
      <div>
        {listRestaurants}
      </div>

    </div>
  )
};
