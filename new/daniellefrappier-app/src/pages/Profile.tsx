import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';
import { FullBackgroundImage } from '../components/FullBackgroundImage/full-background-image.component'
import { IntroContent } from '../components/IntroContent/intro-content.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ProfileProps = {
    className?: string;
}

const sectionTitle = <>pr<span>0</span>file</>;

const Profile = ( {
  className
}: ProfileProps ) => {
    return (
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FullBackgroundImage className='content-section' srcSet='./img/profile.jpg'>
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
            <h2 className="section-title">A little about me</h2>
            <p>I am a detail oriented, deadline-driven, Front End developer in the Boston area who has a varied ability in the development/design arena, from creating clean, semantic, CMS driven websites, bullet proof responsive emails, responsive landing pages, and various other projects.</p>
            <p>Outside of work I'm mom and wife. I love to watch zombie and sci-fi movies, reading post-apocalyptic novels, run obstacle course races, spend the weekend at the beach in the summer or snowboarding on a mountain in the winter.</p>
                <Grid container spacing={3}>
                  <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <img src='./img/danielle-snowboarding.jpg' className="content-image" alt='Danielle Frappier Snowboarding'/>
                  </Grid>
                  <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <img src='./img/danielle-frappier-surfing.jpg' className="content-image" alt='Danielle Frappier Surfing'/>
                  </Grid>
                  <Grid spacing={3} item xs={12} sm={12} md={4} lg={4} xl={4}>
                       <img src='./img/danielle-frappier-jay.jpg' className="content-image" alt='Danielle Frappier at Jay Peak'/>
                  </Grid>
                </Grid>
          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Profile;