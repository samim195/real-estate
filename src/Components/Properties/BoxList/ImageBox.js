import React, {useState} from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ImageBox({ images }) {
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