// import React, { useState } from 'react';
// import BoxList from './BoxList';
// import { Grid, Paper } from '@mui/material';
// import { useLocation } from 'react-router-dom';


//   function searchByEmail(email) {
//     const foundListing = images.find(listing => listing.id === email);
//     console.log(foundListing)
//     return [foundListing] || null;
//   }

// export default function MyProperties() {
//     const location = useLocation();
//     const email = location?.state?.email;
//     const listings = searchByEmail(email);    
//     return (
//         <Grid item xs={12}>
//             <Paper style={{ height: '100px'}}>
//                 <BoxList listings={listings} />
//             </Paper>
//         </Grid>
//     )
// }