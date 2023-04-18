import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss'
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import {Provider} from 'react-redux'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);


