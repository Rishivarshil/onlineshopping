import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './Cart';
import ACart from './components/admin/ACart';
import Checkout from './Checkout';
import Electronics from "./Electronics";
import AElectronics from "./components/admin/AElectronics";
import Watches from "./Watches";
import AWatches from "./components/admin/AWatches";
import Other from "./Other";
import AOther from "./components/admin/AOther";
import Signup from "./login/Signup";
import Welcome from "./login/Welcome";
import AWelcome from "./login/AWelcome";
import LoginControl from "./login/LoginControl";
import Test from './Test';

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
    <App />
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ACart" element={<ACart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/AElectronics" element={<AElectronics />} />
      <Route path="/Watches" element={<Watches />} />
      <Route path="/AWatches" element={<AWatches />} />
      <Route path="/Other" element={<Other />} />
      <Route path="/AOther" element={<AOther />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/LoginControl" element={<LoginControl />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/AWelcome" element={<AWelcome />} />


     

    </Routes>
  </BrowserRouter>,
  rootElement
);
