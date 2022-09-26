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

const sectionTitle = <>re<span>s</span>ume</>;

const Resume = ( {
  className
}: ResumeProps ) => {
    return (
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FullBackgroundImage className='content-section' srcSet='./img/resume.jpg'>
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
          <h2 className="section-title">What I've been up to lately</h2>
              <p>You can download my Resume in pdf and docx format below. Or scroll on to read more about my education, experience and skills.</p>
              <Button>Download Resume (PDF)</Button>
              <Button>Download Resume (DOCS)</Button>
          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Resume;