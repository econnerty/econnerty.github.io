import React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';

const Contact = () => {
  const email = 'erikc@cec.sc.edu';
  const instagramURL = 'https://www.instagram.com/erikconnerty/';
  const facebookURL = 'https://www.facebook.com/erikconnerty/';
  const twitterURL = 'https://twitter.com/erikconnerty/';

  return (
    <Container>
      <Box paddingTop={10} mt={4}>
        <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
          Contact
        </Typography>
        <Typography variant="body1" sx={{ color: 'primary.main' }}>
          I'd love to hear from you! Feel free to reach out via email or connect with me on social media:
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>Email:</Typography>
          <Link href={`mailto:${email}`} color="primary.secondary" underline="hover">
            {email}
          </Link>
        </Box>
        <Box mt={2}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>Social Media:</Typography>
          <IconButton
            edge="start"
            aria-label="Instagram"
            component="a"
            href={instagramURL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: '2rem' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            edge="start"
            aria-label="Facebook"
            component="a"
            href={facebookURL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: '2rem' }}
          >
            <Facebook />
          </IconButton>
          {/* Add more social media icons/buttons here */}
          <IconButton
            edge="start"
            aria-label="Twitter"
            component="a"
            href={twitterURL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: '2rem' }}
          >
            <Twitter />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
