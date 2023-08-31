import React, {useState} from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImageBox({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const title = "";
  const content = "";

  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="300px"
        image={images[currentImageIndex]}
        alt="Image"
      />
      <CardContent style={{position:'absolute'}}>
        <Typography gutterBottom variant="h5" component="div">
          <p className="lay5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br></br> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<br></br> ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br></br> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br></br>occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br></br> mollit anim id est laborum.</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
