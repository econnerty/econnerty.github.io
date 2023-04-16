import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useScroll from '../hooks/useScroll';

const Navigation = () => {
  const scrollPosition = useScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const appBarStyle = {
    height: scrollPosition > 50 ? '90px' : '120px',
    transition: 'height 0.3s',
    boxShadow: scrollPosition > 50 ? '0 3px 5px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed" sx={appBarStyle} elevation={0}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            color: 'secondary.main',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Erik Connerty (Researcher)
        </Typography>
        
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        >
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
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button component={NavLink} to="/" exact onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/about" onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={NavLink} to="/CV" onClick={handleDrawerClose}>
            <ListItemText primary="CV" />
          </ListItem>
          <ListItem button component={NavLink} to="/projects" onClick={handleDrawerClose}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={NavLink} to="/contact" onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navigation;
