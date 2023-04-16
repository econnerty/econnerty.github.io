import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import useScroll from '../hooks/useScroll';

const Navigation = () => {
  const scrollPosition = useScroll();

  const appBarStyle = {
    height: scrollPosition > 50 ? '64px' : '80px',
    transition: 'height 0.3s',
    boxShadow: scrollPosition > 50 ? '0 3px 5px rgba(0, 0, 0, 0.1)' : 'none',
  };

  return (
    <AppBar position="fixed" sx={appBarStyle} elevation={0}>
      <Toolbar>
        <Typography
          variant="h1"
          sx={{
            flexGrow: 1,
            fontWeight:'bold',
            color: 'secondary.main',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Erik Connerty
        </Typography>
        <Button color="inherit" component={NavLink} to="/" exact>
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/CV">
          CV
        </Button>
        <Button color="inherit" component={NavLink} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
