import React from 'react';
import ReactDOM from 'react-dom/client';
import Details from './pages/Datails';

//import App from './App';
import Home from './pages/Home/index';

import SignUp from './pages/SignUp/index';

import { BrowserRouter } from 'react-router-dom';


import { Router } from './pages/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);



