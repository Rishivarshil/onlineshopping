import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './Cart';
import Checkout from './Checkout';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />


    </Routes>
  </BrowserRouter>,
  rootElement
);
