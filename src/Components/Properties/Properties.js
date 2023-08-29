import React, { useContext } from 'react';
import SearchBox from './SearchBox';
import './Properties.css';
import BoxList from './BoxList/BoxList';
import { Grid, Paper } from '@mui/material';
import { ListingsContext } from '../../Context';



function Properties() {
  const listings = useContext(ListingsContext);

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={12}>
          <Paper style={{ height: '100px' }}><SearchBox></SearchBox></Paper>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12}>
          <Paper style={{ height: '100px' }}><BoxList listings={listings} /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Properties
