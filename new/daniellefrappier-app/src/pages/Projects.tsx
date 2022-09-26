import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';
import { Button } from '../components/Button/button.component';
import { FullBackgroundImage } from '../components/FullBackgroundImage/full-background-image.component'
import { IntroContent } from '../components/IntroContent/intro-content.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ResumeProps = {
    className?: string;
}

const sectionTitle = <>pro<span>j</span>ects</>;

const Projects = ( {
  className
}: ResumeProps ) => {
    return (
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FullBackgroundImage className='content-section' srcSet='./img/projects.jpg'>
            <IntroContent sectionTitle={sectionTitle} />
          </FullBackgroundImage>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <MenuButton className="close" id='home'>
            <>
              Close <FontAwesomeIcon icon={faXmark}/>
            </>
          </MenuButton>
          <Container className="content">
            <h2 className="section-title">Some stuff I've done.</h2>
            <Grid container spacing={3}>
              <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                Project 1
                image here
                description here
              </Grid>
              <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                Project 2
                image here
                description here
              </Grid>
              <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                Project 3
                image here
                description here
              </Grid>
              <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                Project 4
                image here
                description here
              </Grid>
              <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                Project 5
                image here
                description here
              </Grid>
              <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                Project 6
                image here
                description here


              </Grid>
            </Grid>

            <Button href="../docs-build/index.html">View the storybook for the site</Button>
          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Projects;