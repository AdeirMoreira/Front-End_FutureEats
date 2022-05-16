import React from 'react';
import Router  from './routes/Router';
import { GlobalState } from './globalState/GlobaState';

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
