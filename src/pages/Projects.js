import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

import campus_connect from '../assets/campus_connect.png';

const Projects = () => {
  const projectList = [
    {
      title: 'Campus Connect',
      description: 'A cross-platform social media app for students to connect with each other.',
      imageUrl: campus_connect,
      link:'https://sccapstone.github.io/CampusConnect/'
    },
    // ...other projects
  ];

  return (
    <Container>
      <Box mt={2} paddingTop={10}> {/* Adjust the marginTop and paddingTop values */}
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectList.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imageUrl}
                    alt={project.title}
                    style={{ backgroundColor: '#73000a' }}
                  />
                  <CardContent style={{ backgroundColor: 'white' }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
