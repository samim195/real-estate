import React from 'react';
import apartment from './apartment.jpg'
import './customapt.css';

function HomeImage() {
  return (
    <div className='apt' style={{ backgroundImage:`url(${apartment})`}}>
      <h1 className="bkmsg">Affordable Kabul Homes <br></br> Start Your New Life<br></br>Find Your Perfect Home Now</h1>
    </div>
  );

}

export default HomeImage;