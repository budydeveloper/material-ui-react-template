import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Material-UI Template
        </Typography>
        <Typography variant="body1">This is the home page of the Material-UI template.</Typography>
      </Box>
    </Container>
  );
};

export default Home;
