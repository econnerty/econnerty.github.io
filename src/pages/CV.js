import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CV = () => {
    const cvContent = `
    Erik Connerty
    Columbia, SC
    erikc@cec.sc.edu
    
    Objective
    ----------
    To push the envelope further in the field of Artificial Intelligence.
    
    Education
    ---------
    Doctor of Philosophy in Computer Science
    University of South Carolina, [City, State]
    May 2023 - Present
    - Currently a Ph.D student being advised by Dr. Vignesh Narayanan.
    - Research intersects machine learning, natural language processing, and computer vision.
    
    Bachelor of Science in Computer Science
    University of South Carolina, Columbia, SC
    August 2014 - May 2023
    - Graduated with a Bachelor of Science in Computer Science.
    - Coursework included software engineering, algorithms, data structures, computer systems, and artificial intelligence.
    
    Work Experience
    ---------------
    Graduate Research Assistant
    University of South Carolina 
    Columbia, SC
    May 2023 - Present
    - Provide support and research expertise to USC - AI Institute
    - Develop software to advance the field of Artificial Intelligence.

    Undergraduate Research Assistant
    University of South Carolina
    Columbia, SC
    August 2022 - May 2023
    - Developed novel solutions to problems while working on the ICS project.

    Undergraduate Teaching Assistant
    University of South Carolina
    Columbia, SC
    August 2022 - December 2022
    - Aided in the teaching and grading of the Course CSCE 201 (Introduction to Computer Security).

    Software Developer
    Tapestry Solutions
    Charleston,Sc
    August 2017 - December 2018
    - Assured software was adequately prepared and deployable to aid US warfighter capabilities.
    - Collaborated with a team of software developers to create high-quality and robust applications.
    - Participated in code reviews and contributed to software design and architecture discussions.
    
    Scientist (Intern)
    SPAWAR
    Charleston,SC
    June 2015 - August 2017
    - Learned the fundamentals of penetration testing in a real-world environment.
    - Assisted with vulnerability assessments and threat modeling for various systems.
    - Collaborated with a team of security professionals to strengthen security posture and mitigate risks.
    
    Skills
    ------
    - Strong foundation in computer science fundamentals, including algorithms, data structures, and software engineering principles.
    - Proficient in programming languages such as Python, Java, and C++.
    - Experience with machine learning frameworks such as TensorFlow and PyTorch.
    - Knowledgeable in natural language processing and computer vision techniques.
    
    References
    ----------
    Available upon request.`;
  return (
    <Container>
      <Box mt={4} paddingTop={10}>
      <Typography variant="body1" component="pre" paragraph sx={{
          fontSize: { xs: '14px', md: '16px' },
          lineHeight: { xs: '20px', md: '24px' }
        }}>
          {cvContent}
        </Typography>
      </Box>
    </Container>
  );
};

export default CV;
