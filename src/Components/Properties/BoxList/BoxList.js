import React from "react";
import beaufort from './images/beaufort.png';
import chelsea from './images/chelsea.jpg';
import fulham from './images/fulham.jpeg';
import kings from './images/kings.jpeg';
import laundreyworks from './images/laundreyworks.jpeg';
import woodberry from './images/woodberry.png';

import { Grid } from '@mui/material';

export default function BoxList() {
    const images = [
        {id: 1, src: beaufort},
        {id: 2, src: chelsea},
        {id: 3, src: fulham},
        {id: 4, src: kings},
        {id: 5, src: laundreyworks},
        {id: 6, src: woodberry}
    ];

    return (
        <Grid container spacing={2}>
            {images.map((image) => (
                <Grid key={image.id} item xs={12} sm={4}>
                <img 
                src={image.src}
                style={{
                    width: '80%',
                    height: '70%',
                    marginTop: '150px'
                }}
                />
            </Grid>
            ))}
        </Grid>
    );
};