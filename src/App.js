import React from 'react';
import './App.css';
import { ListingsProvider } from './Context';
import HomeImage from './HomeMain/CustomImageApt';
import Header from './header/Header.js';
import Image3 from './Components/Home/Lay4';

import Properties from './Components/Properties/Properties.js'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import RegisterForm from './Components/Register/Register.js';
import Login from './Components/Login/Login';
import MyProperties from './Components/Properties/MyProperties/MyProperties';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const headerFooterStyle = {
  padding: 8,
  textAlign: "center",
};

const mainStyle = {
  padding: 16,
  textAlign: "center"
}


function App() {
  return (
    <div style={{flexGrow: 1}}>
    <Grid container spacing={3}>
      <Grid item xs={7}>
          <Paper style={headerFooterStyle}>
            <Header/>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper style={headerFooterStyle}>
            <Grid container spacing={1}>      
              <Typography>
                <Navbar.Text><a className="navbartxtcolour" href="/properties">Properties</a> </Navbar.Text>
                <Navbar.Text><a className="navbartxtcolour" href="/login">Login</a> </Navbar.Text>
                <Navbar.Text><a className="navbartxtcolour" href="/register">Register</a> </Navbar.Text>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <HomeImage/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{padding:'8'}}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <p className="lay1">Starting from<br></br>USD 30,000</p>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  <p className="lay2">Easy Payment Plans</p>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  <p className="lay3">Luxury Lifestyle</p>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Grid container spacing={2} direction={"column"}>
              <Grid item xs={12}>
                <Typography>
                  <p className="lay4">Start Your Luxury<br></br>Dream Life Now</p>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                <p className="lay5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br></br> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<br></br> ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br></br> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br></br>occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br></br> mollit anim id est laborum.</p>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Grid item xs={12}>
              <Image3/>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
