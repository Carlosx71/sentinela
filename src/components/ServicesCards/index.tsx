import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grow, Typography } from '@mui/material';

interface Props {
  title: string;
  description: string;
  image: string;
  scrollYPosition?: number;
  timeout?: number;
}

const ServiceCard = ({
  title,
  description,
  image,
  scrollYPosition = 0,
  timeout = 0,
}: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgColor = '#2C2C2C';

  return (
    <Grow
      in={scrollPosition >= scrollYPosition}
      style={{ transformOrigin: '0 0 0' }}
      {...(scrollPosition >= scrollYPosition ? { timeout: timeout } : {})}
    >
      <Card sx={{ height: 400, bgcolor: bgColor, backgroundImage: 'none' }}>
        <CardMedia component="img" height="220" image={image} alt={title} />
        <CardContent sx={{ bgcolor: bgColor, height: '100%' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default ServiceCard;
