import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';
import { FullBackgroundImage } from "../components/FullBackgroundImage/full-background-image.component";
import { IntroContent } from '../components/IntroContent/intro-content.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ContactProps = {
    className?: string;
}

const sectionTitle = <>cont<span>a</span>ct</>;

const Contact = ( {
  className
}: ContactProps ) => {
    return (
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FullBackgroundImage className='content-section' srcSet='./img/contact.jpg'>
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
          <h2 className="section-title">Drop me a line!</h2>
              <p>Do you want to work together on a project? <br/>
              Do you have a question or comment? <br/>
              Or do you just want to say hello? <br/>
              Send a message channels below I’ll get back to you ASAP.</p>
          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Contact;