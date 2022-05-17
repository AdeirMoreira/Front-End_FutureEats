import React from 'react';
import Router from './routes/Router';
import { GlobalState } from './globalState/GlobalState';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
