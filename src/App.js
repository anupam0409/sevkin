import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import { HashRouter, Route, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Craving from './Components/Craving';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import Subcraving from './Components/Subcraving';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sevkin" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/craving" element={<Craving />} />
        <Route path="/subcraving" element={<Subcraving />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;  
