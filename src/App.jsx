import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import SignIn from "./Pages/SingIn";
import SignUp from "./Pages/SingUp";
import Error404 from "./Pages/404";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={< Error404 />} />
      </Routes>
  
  );
}

export default App;

