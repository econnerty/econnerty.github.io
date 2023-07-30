import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia } from '@mui/material';
import profilePicture from '../assets/profile_picture.jpg';

const Home = () => {
  return (
    <Container>
      <Box paddingTop={10} mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image={profilePicture}
                alt="Profile picture"
              />
            </Card>
            <Typography variant="body1">
                (That's me on the left.)
              </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" flex={1}>
              <Typography variant="body1">
                Welcome to my personal website! I'm a Ph.D. student at the University of South Carolina, researching AI, Quantum Computing, and biomedical computing research. I am dedicated to developing innovative algorithms and techniques to advance the field of Computer Science.
              </Typography>
              <Box mt={4} flex={1}>
                <Typography variant="h4" gutterBottom>
                  Research Interests
                </Typography>
                <Typography variant="body1">
                  My primary research interests include:
                </Typography>
                <ul>
                  <li>Artificial Intelligence (AGI)</li>
                  <li>Quantum Computing</li>
                  <li>Medical applications of Computer Science</li>
                </ul>
              </Box>
            </Box>
            {/*<Box mt={4}>
              <Typography variant="h4" gutterBottom>
                Recent Publications
              </Typography>
              <Typography variant="body1">
                <ol>
                  <li>
                    <strong>Publication Title 1</strong>, Your Name, Co-Author(s) Name(s), Conference/Journal, Year.
                  </li>
                  <li>
                    <strong>Publication Title 2</strong>, Your Name, Co-Author(s) Name(s), Conference/Journal, Year.
                  </li>
                </ol>
              </Typography>
          </Box>*/}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
