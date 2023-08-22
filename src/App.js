import React from 'react';
import './App.css';
import Header from './header/Header.js'
import CustomNavbar from './navbar/CustomNavBar.js';
import HomeImage from './CustomImage/CustomImageApt.js';
import Layer3 from './layer3/Layer3.js';

function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      <CustomNavbar></CustomNavbar>
      </div>
      <HomeImage></HomeImage>
      <Layer3></Layer3>
    </div>
  );
}

export default App;
