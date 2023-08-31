import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CustomNavBar from '../navbar/CustomNavBar';
import '../navbar/CustomNavBar.css';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Typography variant="h4" component="h1" fontWeight="bold" fontFamily="Arial, sans-serif">
      Watan Properties
    </Typography>
  )
}

export default Header