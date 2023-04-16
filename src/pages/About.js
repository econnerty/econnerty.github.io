import React from 'react';
import { Container, Typography, Box, CardMedia } from '@mui/material';
import schoolLogo from '../assets/gamecock2.png';

const About = () => {
  return (
    <Container>
      <Box paddingTop={10} mt={4}>
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" paragraph>
          I am 27 years old and was born and raised in South Carolina. I have been interested in technology and science from a young age, and have always wanted to make ideas from movies into reality. I hope to use the skills and knowledge I gain in the next few years to create novel solutions to problems that are currently being faced in the fields of AI and Medicine.
        </Typography>
      </Box>
      <Box
        mt={4}
        display="flex"
        maxHeight={200}
        maxWidth={200}
      >
        <CardMedia
          component="img"
          height={200}
          width={150}
          image={schoolLogo}
          alt="School logo"
          ml={2}
        />
      </Box>
      <Typography variant="body1" gutterBottom>
          (The only school in South Carolina. Boo Clemson.)
      </Typography>
    </Container>
  );
};

export default About;
