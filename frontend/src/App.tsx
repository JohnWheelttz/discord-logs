import React from 'react';

import { GlobalStyle } from './settings/styles';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
