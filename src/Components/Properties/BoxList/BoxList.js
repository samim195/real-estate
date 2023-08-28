import React from 'react';
import { Grid } from '@mui/material';
import ImageBox from './ImageBox';


function BoxList({ listings }) {
    console.log("boxing list")
    console.log(listings)
    if (!listings) {
        return <p>No listing found.</p>;
    }
  return (
    <Grid container spacing={2} sx={{ padding: '20px 70px' , position: 'relative', top:'150px'}}>
      {listings.map((listing, index) => (
        <Grid key={index} item xs={12} sm={4} sx={{position:'relative', display:'flex', justifyContent: 'center'}}>
          <ImageBox images={listing.images[0]}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default BoxList;