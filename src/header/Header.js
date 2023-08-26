import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CustomNavBar from '../navbar/CustomNavBar';
import '../navbar/CustomNavBar.css';

function Header() {
  return (
    <div className='headerposition'>
      <h1><a className='watanname' href="/">Watan Properties</a></h1>
      <CustomNavBar></CustomNavBar>
    </div>
  )
}

export default Header