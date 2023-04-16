import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box paddingTop={10} mt={4}>
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" paragraph>
          I like stuff.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
