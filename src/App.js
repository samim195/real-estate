import React from 'react';
import './App.css';
import Header from './header/Header.js'
import { ListingsProvider } from './Context';

import Properties from './Components/Properties/Properties.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import RegisterForm from './Components/Register/Register.js';
import Login from './Components/Login/Login';
import MyProperties from './Components/Properties/MyProperties/MyProperties';


function App() {
  return (
    <ListingsProvider>
      <BrowserRouter>
        <div className="bk-col">
          <Header></Header>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/properties" element={<Properties />}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/myproperties" element={<MyProperties/>}/>
        </Routes>
      </BrowserRouter>
    </ListingsProvider>
  );
}

export default App;
