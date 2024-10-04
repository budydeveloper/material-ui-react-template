import React from 'react';
import { Box } from '@mui/material';
import MainNavBar from './MainNavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // El contenedor debe ocupar toda la pantalla
      }}
    >
      <MainNavBar />
      <Box
        component="main"
        sx={{
          flex: 1, // Empuja el footer hacia abajo
          padding: '20px',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
