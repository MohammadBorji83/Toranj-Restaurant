import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import Error404 from "./Pages/404";
import Navbar from './components/Menu';
import Footer from './components/Footer';
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
   <CartProvider>
     <Navbar />
      <Routes>
         <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={< Error404 />} />
      </Routes>
      <Footer />

   </CartProvider>
   
   </>
  );
}

export default App;

