import React from 'react';
import './App.css';
import Header from './header/Header.js'

import HomeImage from './CustomImage/CustomImageApt.js';
import Layer3 from './layer3/Layer3.js';

function App() {
  return (
    <div className="App">
      <div className="bk-col">
      <Header></Header>
      </div>
      <HomeImage></HomeImage>
      <Layer3></Layer3>
    </div>
  );
}

export default App;
