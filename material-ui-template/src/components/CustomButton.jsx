import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ color, text, onClick }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
