import React, { useState, useEffect } from 'react';
import Router from './routes/Router';
import { GlobalState } from './globalState/GlobalState';
import theme from './constants/themes';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import splachScreen from './assets/Images/splachScreen.png'


const SplachScreen = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${splachScreen});
background-size: cover;
background-repeat: no-repeat;

`

function App() {
  // const [loading,setLoading] = useState(true)
  // useEffect(()=>{
  // setTimeout(()=>{
  // setLoading(false)
  // },1700)
  // },[])
  return (
    <ThemeProvider theme={theme}>
    <GlobalState>

      {/* {loading ? <SplachScreen/> : }  */}
      <Router/>
    </GlobalState>

    </ThemeProvider>
  );
}

export default App;
