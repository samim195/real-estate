import React from 'react';
import './App.css';
import Header from './header/Header.js'

import HomeImage from './CustomImage/CustomImageApt.js';
import Layer3 from './layer3/Layer3.js';
import Properties from './Components/Properties/Properties.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <HomeImage></HomeImage>
      <Layer3></Layer3>
  </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div className="bk-col">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/properties" element={<Properties />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
