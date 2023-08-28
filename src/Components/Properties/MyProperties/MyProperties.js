import React, { useState } from 'react';
import BoxList from './BoxList';
import { Grid, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import beaufort from '../BoxList/images/beaufort.png';
import chelsea from '../BoxList/images/chelsea.jpg';
import fulham from '../BoxList/images/fulham.jpeg';
import kings from '../BoxList/images/kings.jpeg';
import laundreyworks from '../BoxList/images/laundreyworks.jpeg';
import woodberry from '../BoxList/images/woodberry.png';

const images = [
    {id: "sk@hotmail.com", images: [[beaufort, chelsea, fulham, kings, woodberry, laundreyworks], [chelsea, beaufort, kings, fulham, laundreyworks, woodberry]] },
    {id: "tk@hotmail.com", images: [[chelsea, beaufort, kings, fulham, laundreyworks, woodberry]] },
    {id: "pk@hotmail.com", images: [[woodberry, laundreyworks, kings, fulham, beaufort, woodberry]] },
    {id: "ak@hotmail.com", images: [[beaufort, chelsea, fulham, kings, woodberry, laundreyworks]] },
    {id: "ck@hotmail.com", images: [[woodberry, fulham, kings, laundreyworks, laundreyworks, woodberry]] },
    {id: "mk@hotmail.com", images: [[laundreyworks, laundreyworks, kings, fulham, beaufort, woodberry]] }
  ];

  function searchByEmail(email) {
    const foundListing = images.find(listing => listing.id === email);
    console.log(foundListing)
    return [foundListing] || null;
  }

export default function MyProperties() {
    const location = useLocation();
    const email = location?.state?.email;
    const listings = searchByEmail(email);    
    return (
        <Grid item xs={12}>
            <Paper style={{ height: '100px'}}>
                <BoxList listings={listings} />
            </Paper>
        </Grid>
    )
}