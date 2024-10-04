import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#1976d2',
        color: 'white',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Material UI Template. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
