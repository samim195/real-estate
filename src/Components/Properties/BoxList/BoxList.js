import React, { useState } from 'react';
import beaufort from './images/beaufort.png';
import chelsea from './images/chelsea.jpg';
import fulham from './images/fulham.jpeg';
import kings from './images/kings.jpeg';
import laundreyworks from './images/laundreyworks.jpeg';
import woodberry from './images/woodberry.png';
import { Grid, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ImageBox({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div>
    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} style={{ width: '400px', height: '300px', position:'relative', paddingBottom:'50px', paddingTop:'50px'}} />
      <IconButton onClick={handlePrevImage} style={{ position: 'absolute', top: '50%', left: '30px', transform: 'translateY(-50%)', zIndex: 2 }}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton onClick={handleNextImage} style={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)', zIndex: 2 }}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
}




const listings = [
  { images: [beaufort, chelsea, fulham, kings, woodberry, laundreyworks] },
  { images: [chelsea, beaufort, kings, fulham, laundreyworks, woodberry] },
  { images: [woodberry, laundreyworks, kings, fulham, beaufort, woodberry] },
  { images: [beaufort, chelsea, fulham, kings, woodberry, laundreyworks] },
  { images: [woodberry, fulham, kings, laundreyworks, laundreyworks, woodberry] },
  { images: [laundreyworks, laundreyworks, kings, fulham, beaufort, woodberry] }
];

function BoxList() {
  return (
    <Grid container spacing={2} sx={{ padding: '20px 70px' , position: 'relative', top:'150px'}}>
      {listings.map((listing, index) => (
        <Grid key={index} item xs={12} sm={4} sx={{position:'relative', display:'flex', justifyContent: 'center'}}>
          <ImageBox images={listing.images}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default BoxList;