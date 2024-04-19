import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: Props) => {
  const bgColor = '#2C2C2C';

  return (
    <Card sx={{ height: 400, bgcolor: bgColor, backgroundImage: 'none' }}>
      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent sx={{ bgcolor: bgColor, height: '100%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
