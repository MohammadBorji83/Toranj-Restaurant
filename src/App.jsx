import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import SignUp from "./Pages/SingUp";
import Error404 from "./Pages/404";
import Navbar from './components/Menu';
import Footer from './components/Footer';
import Login from './Pages/Login';

function App() {
  return (
    <>
   
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={< Error404 />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;

