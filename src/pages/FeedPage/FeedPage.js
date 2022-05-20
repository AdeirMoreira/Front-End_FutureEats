import { Container } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FutureEats } from '../../globalState/Context';
import { getActiveOrder, getRestaurants } from '../../services/FeedPage';
import { ListRestaurants, ContainerEntrega } from './styled';
import { goToRestDetails } from '../../routes/coordinators';
import { Box, Tab, Tabs } from '@material-ui/core';
import Footer from '../../Components/Footer/Footer';

export default function FeedPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const params = useContext(FutureEats);

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)
  };

  useEffect(() => {
    getRestaurants(params.setRest)
  }, []);

  useEffect(() => {
    getActiveOrder(params.setOrder)
  }, []);

  const [valueCategory, setValueCategory] = useState(0);

  const handleChange = (event, newValue) => {
    setValueCategory(newValue);
  };

  const renderOrder = () => (
    <div>
      <p>Pedido em andamento:</p>
      <p>{params.order.restaurantName}</p>
      <p>Total: R${params.order.totalPrice}</p>
    </div>
  )

  console.log(params.order)

  const navList = params.rest
    ?.filter((restaurant) => {
      if (valueCategory === 0) {
        return restaurant;
      } else if (valueCategory === 1) {
        return restaurant.category === "Hamburguer";
      } else if (valueCategory === 2) {
        return restaurant.category === "Asiática";
      } else if (valueCategory === 3) {
        return restaurant.category === "Árabe";
      } else if (valueCategory === 4) {
        return restaurant.category === "Mexicana";
      } else if (valueCategory === 5) {
        return restaurant.category === "Baiana";
      } else if (valueCategory === 6) {
        return restaurant.category === "Petiscos";
      } else if (valueCategory === 7) {
        return restaurant.category === "Sorvetes";
      } else if (valueCategory === 8) {
        return restaurant.category === "Carnes";
      }
    })
    .filter((buscar) => {
      return (
        buscar.name.toUpperCase().includes(search.toUpperCase())
      )
    })
    .map((restaurants) => {
      return (
        <ListRestaurants onClick={() => goToRestDetails(navigate, restaurants.id)} key={restaurants.id}>
          <img src={restaurants.logoUrl} alt="Logo restaurante" />
          <h3>{restaurants.name}</h3>
          <ContainerEntrega>
            <p>Tempo de entrega: {restaurants.deliveryTime}min</p>
            <p>Frete R${restaurants.shipping}</p>
          </ContainerEntrega>
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
      <Box
        sx={{ maxWidth: { xs: 350, sm: 480 }, margin: "auto" }}
      >
        <Tabs
          value={valueCategory}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Tudo" />
          <Tab label="Burguer" />
          <Tab label="Asiática" />
          <Tab label="Árabe" />
          <Tab label="Mexicano" />
          <Tab label="Baiana" />
          <Tab label="Petiscos" />
          <Tab label="Doces" />
          <Tab label="Carnes" />
        </Tabs>
      </Box>
      <div>
        {navList}
      </div>
      <div>
      {params.order && renderOrder()}
      </div>
      <Footer />
    </div>
  )
};
