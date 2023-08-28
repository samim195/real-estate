import HomeImage from '../../HomeMain/CustomImageApt.js';
import Layer4 from './Lay4.js';
import { Grid } from '@mui/material';
import React from 'react';
import Layer3 from './layer3/Layer3.js';


export default function Home() {
    return (
      <div style={{ padding: '20px' }}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={12}>
            <HomeImage></HomeImage>
          </Grid>
  
          {/* Second Row */}
          <Grid item xs={12} >
            <Layer3></Layer3>
          </Grid>
  
          {/* Third Row */}
          <Grid item xs={12}>
            <Layer4></Layer4>
          </Grid>
        </Grid>
      </div>
    );
  }