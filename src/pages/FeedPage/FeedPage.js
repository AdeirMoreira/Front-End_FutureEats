import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FutureEats } from '../../globalState/Context';
import { getActiveOrder, getRestaurants } from '../../services/FeedPage';
import { ListRestaurants, ContainerName, ContainerImg, ContainerRestaurants, ContainerEntrega, DeliveryTime, Shipping } from './styled';
import { goToRestDetails } from '../../routes/coordinators';
import { Box, Tab, Tabs, TextField } from '@material-ui/core';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header';
import time from '../../assets/Images/time.png';
import delivery from '../../assets/Images/delivery.png';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons/Search';
export default function FeedPage() {
  const navigate = useNavigate();
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
      {params.order.totalPrice &&
        <p>Total: R${params.order.totalPrice.toFixed(2).replace('.', ',')}</p>
      }
    </div>
  )

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
          <ContainerImg>
            <img src={restaurants.logoUrl} alt="Logo restaurante" />
          </ContainerImg>
          <ContainerName>{restaurants.name}</ContainerName>
          <ContainerEntrega>
            <DeliveryTime>
              <img src={time} /><p>{restaurants.deliveryTime}min</p>
            </DeliveryTime>
            <Shipping>
              <img src={delivery} /><p>Frete R${restaurants.shipping}</p>
            </Shipping>
          </ContainerEntrega>
        </ListRestaurants>
      )
    })

  return (
    <div>
      <Header />
      <div>
        <TextField
          label={'Restaurante'}
          variant={'outlined'}
          type="text"
          value={search}
          onChange={handleSearch}
          required
        />
        {/* <FormControl variant="outlined" style={{ width: '100%', marginTop: '15px', marginBottom: '15px' }}>
              <InputLabel>Senha</InputLabel>
              <OutlinedInput
                name={"search"}
                type={"text"}
                value={search}
                onChange={handleSearch}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={setSearch}
                      edge="end"
                    >
                      {<Search/>}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={50}
              />
            </FormControl> */}
      </div>
      <Box
        sx={{ maxWidth: { xs: 350, sm: 480 }, margin: "auto" }}
      >
        <Tabs
          indicatorColor="primary"
          value={valueCategory}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          textColor="primary"
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
      <ContainerRestaurants>
        {navList}
      </ContainerRestaurants>
      <div>
        {params.order && renderOrder()}
      </div>
      <Footer />
    </div >
  )
};
