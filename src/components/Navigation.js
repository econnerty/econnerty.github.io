import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
      <Toolbar
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            color: 'secondary.main',
            fontFamily: '"Playfair Display", serif',
            mb: { xs: 1, sm: 0 },
          }}
        >
          Erik Connerty
        </Typography>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
