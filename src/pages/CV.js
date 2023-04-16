import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const CV = () => {
  return (
    <Container>
      <Box mt={4} paddingTop={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Erik Connerty
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Researcher
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Columbia, SC
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              erikc@cec.sc.edu
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Objective
            </Typography>
            <Typography variant="body1">
              To push the envelope further in the field of Artificial Intelligence.
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            {/* Doctor of Philosophy in Computer Science */}
            <Typography variant="h5" gutterBottom>
              Doctor of Philosophy in Computer Science
            </Typography>
            <Typography variant="body1">
              University of South Carolina
            </Typography>
            <Typography variant="body1">
              May 2023 - Present
            </Typography>
            <Typography variant="body2">
              - Currently a Ph.D student being advised by Dr. Vignesh Narayanan.
            </Typography>
            <Typography variant="body2">
              - Research intersects machine learning, natural language processing, computer vision, and medicine.
            </Typography>

            {/* Bachelor of Science in Computer Science */}
            <Typography variant="h5" gutterBottom>
              Bachelor of Science in Computer Science
            </Typography>
            <Typography variant="body1">
              University of South Carolina, Columbia, SC
            </Typography>
            <Typography variant="body1">
              August 2014 - May 2023
            </Typography>
            <Typography variant="body2">
              - Member of the USC drumline from 2015-2016
            </Typography>
            <Typography variant="body2">
              - Coursework included software engineering, algorithms, data structures, computer systems, and artificial intelligence.
            </Typography>
          </Grid>
          
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Work Experience
              </Typography>
              {/* Graduate Research Assistant */}
              <Typography variant="h5" gutterBottom>
                Graduate Research Assistant
              </Typography>
              <Typography variant="body1">
                University of South Carolina
              </Typography>
              <Typography variant="body1">
                Columbia, SC
              </Typography>
              <Typography variant="body1">
                May 2023 - Present
              </Typography>
              <Typography variant="body2">
                - Provide support and research expertise to USC - AI Institute
              </Typography>
              <Typography variant="body2">
                - Develop software to advance the field of Artificial Intelligence.
              </Typography>
              {/* ... other work experiences ... */}
              <Typography variant="h5" gutterBottom>
                Undergraduate Research Assistant
              </Typography>
              <Typography variant="body1">
                University of South Carolina
              </Typography>
              <Typography variant="body1">
                Columbia, SC
              </Typography>
              <Typography variant="body1">
                August 2022 - May 2023
              </Typography>
              <Typography variant="body2">
                - Develop solutions and software for the ICS project.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Undergraduate Teaching Assistant
              </Typography>
              <Typography variant="body1">
                University of South Carolina
              </Typography>
              <Typography variant="body1">
                Columbia, SC
              </Typography>
              <Typography variant="body1">
                August 2022 - December 2023
              </Typography>
              <Typography variant="body2">
                - Aided in the teaching and grading of the class CSCE 201 (Introduction to Computer Security)
              </Typography>
              <Typography variant="h5" gutterBottom>
                Software Developer
              </Typography>
              <Typography variant="body1">
                Tapestry Solutions
              </Typography>
              <Typography variant="body1">
                Charleston, SC
              </Typography>
              <Typography variant="body1">
                August 2017 - December 2018
              </Typography>
              <Typography variant="body2">
                - Developed and tested software solutions for the TACMOBILE project.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Scientist (Intern)
              </Typography>
              <Typography variant="body1">
                SPAWAR
              </Typography>
              <Typography variant="body1">
                Charleston, SC
              </Typography>
              <Typography variant="body1">
                June 2015 - August 2017
              </Typography>
              <Typography variant="body2">
                - Learned from experienced pentesters and gained strong knowledge of the field of cybersecurity.
              </Typography>
              <Typography variant="body2">
                - Taught a robotics course at the Palmetto Cybersecurity Summer Camp.
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Skills
              </Typography>
              <Typography variant="body1">
                - Strong foundation in computer science fundamentals, including algorithms, data structures, and software engineering principles.
              </Typography>
              <Typography variant="body1">
                - Proficient in programming languages such as Python, Java, and C++.
                </Typography>
          <Typography variant="body1">
            - Experience with machine learning frameworks such as TensorFlow and PyTorch.
          </Typography>
          <Typography variant="body1">
            - Knowledgeable in natural language processing and computer vision techniques.
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            References
          </Typography>
          <Typography variant="body1">
            Available upon request.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Container> );
};

export default CV;
