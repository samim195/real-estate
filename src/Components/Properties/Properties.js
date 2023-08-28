import React from 'react'
import SearchBox from './SearchBox';
import './Properties.css';
import BoxList from './BoxList/BoxList';
import { Grid, Paper } from '@mui/material';
import beaufort from './BoxList/images/beaufort.png';
import chelsea from './BoxList/images/chelsea.jpg';
import fulham from './BoxList/images/fulham.jpeg';
import kings from './BoxList/images/kings.jpeg';
import laundreyworks from './BoxList/images/laundreyworks.jpeg';
import woodberry from './BoxList/images/woodberry.png';

const listings = [
    {id: "sk@hotmail.com", images: [[beaufort, chelsea, fulham, kings, woodberry, laundreyworks]] },
    {id: "tk@hotmail.com", images: [[chelsea, beaufort, kings, fulham, laundreyworks, woodberry]] },
    {id: "pk@hotmail.com", images: [[woodberry, laundreyworks, kings, fulham, beaufort, woodberry]] },
    {id: "ak@hotmail.com", images: [[beaufort, chelsea, fulham, kings, woodberry, laundreyworks]] },
    {id: "ck@hotmail.com", images: [[woodberry, fulham, kings, laundreyworks, laundreyworks, woodberry]] },
    {id: "mk@hotmail.com", images: [[laundreyworks, laundreyworks, kings, fulham, beaufort, woodberry]] }
  ];

function Properties() {
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
