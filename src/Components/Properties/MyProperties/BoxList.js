import React from 'react';
import { Grid } from '@mui/material';
import ImageBox from './ImageBox';
import Box from '@mui/material/Box';


function BoxList({ listings }) {
    console.log("boxing list")
    console.log(listings)
    if (!listings) {
        return <p>No listing found.</p>;
    }
  return (
    <Grid container spacing={2} sx={{ padding: '20px 70px', justifyContent: 'center', gap: '20px', position: 'relative', top: '70px' }}>
    {listings.map((listing, index) => (
      <Grid key={index} item xs={12} sm={2} md={4} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        {/* Iterate over each set of images within the current listing */}
        <Box className='properties'
            sx={{
            width: 500,
            maxWidth: '100%',
            }}>
                  {listing.images.map((images, imageIndex) => (
          <ImageBox key={imageIndex} images={images} />
        ))}
        </Box>
      </Grid>
    ))}
  </Grid>
  );
}

export default BoxList;