import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux-state/store.js';

import App from './App.jsx'

import GlobalStyles from './styles/global.css.js';
import './styles/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>      
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Provider store={store}>              
            <App />
        </Provider>
    </BrowserRouter>
    <GlobalStyles />
  </>
);
