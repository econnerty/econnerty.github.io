import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Research = () => {
  const projectList = [
    {
      title: 'ICS (Information Competition Simulator)',
      description: 'A project designed to measure the spread of information amongst a population using NetLogo.',
      funding:'ARLIS',
      imageUrl: '/ics.png'
    },
    // ...other projects
  ];

  return (
    <Container>
      <Box mt={2} paddingTop={10}> {/* Adjust the marginTop and paddingTop values */}
        <Typography variant="h2" gutterBottom>
          Research
        </Typography>
        <Grid container spacing={3}>
          {projectList.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1">
                    {project.description}
                  </Typography>
                  <Typography style={{marginTop:20}} variant="body2">
                    Funding:{project.funding}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Research;
