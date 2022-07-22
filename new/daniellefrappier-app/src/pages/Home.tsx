import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { FullBackgroundImage } from '../components/FullBackgroundImage/full-background-image.component'
import { IntroContent } from '../components/IntroContent/intro-content.component';
import { ActiveSectionContext } from '../contexts/ActiveSectionContext';
import { MenuButton } from '../components/MenuButton/menu-button.component';
import { useTransition, animated } from 'react-spring';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: 0,
      
    },
    gridItem: {
      boxSizing: "border-box",
      padding: theme.spacing(0),
    },
    masonryItem: {
      boxSizing: "border-box",
      padding: `0 ${theme.spacing(0)}px ${theme.spacing(0)}px ${theme.spacing(0)}px`,
      [theme.breakpoints.up("lg")]: {
        padding: `0px ${theme.spacing(0)}px 0px 0px`
      },
      [theme.breakpoints.down("sm")]: {
        padding: `0px ${theme.spacing(0)}px 0px 0px`
      }
    }
  })
);
function Home() {
  const classes = useStyles();
  const { currentSection } = useContext(ActiveSectionContext);
  const transitionHome = useTransition(currentSection === 'home', {
    from: { y: -800, opacity: 1, height: `100%` },
    enter: { y: 0, opacity: 1, height: `100%` },
    leave: { y: 800, opacity: 0, height: `100%` },
  });

  const transitionPages = useTransition(currentSection !== 'home', {
    from: { x: 800, opacity: 1, height: `100%` },
    enter: { x: 0, opacity: 1, height: `100%` },
  });

  return (
    <>
    {transitionPages((style, item) =>
      item ? <animated.div style={style}>
      {currentSection === 'profile' && <Profile />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'resume' && <Resume />}
      {currentSection === 'contact' && <Contact />}
      </animated.div> : null
    )}


    {transitionHome((style, item) =>
      item ? <animated.div style={style}>
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item md={6} xs={12} id='main' className={`${classes.gridItem}`}>
          <Paper elevation={0} className={`${classes.paper}`}>
          <FullBackgroundImage srcSet='./img/danielle_frappier_bg.jpg'>
            <IntroContent>
              <>
              <h1 >Hi there!<br/> My name is <span>Danielle</span></h1>
              </>
            </IntroContent>
          </FullBackgroundImage>
          </Paper>
        </Grid>
        <Grid item container md={6} xs={12} id='menu' className={classes.gridItem}>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            className={`${classes.masonryItem}`}
          >
        
            <Paper elevation={0} className={classes.paper}>
              <MenuButton id='profile'>
                <FullBackgroundImage srcSet='./img/profile.jpg'>
               
                  <IntroContent>
                  
                    <>
                
                      <h2>PR<span>O</span>FILE</h2>
                      <h3>Some words about mebbb.</h3>
                  
                    </>
                    
                  </IntroContent>
               
                </FullBackgroundImage>
              </MenuButton>
            </Paper>
            
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            className={`${classes.masonryItem}`}
          >
            <Paper elevation={0} className={classes.paper}>
              <MenuButton id='resume'>
                <FullBackgroundImage srcSet='./img/resume.jpg'>
                  <IntroContent>
                    <Grid container  
                      justifyContent="space-around"
                      alignItems="center" 
                      style={{ height: "100%" }}
                    >
                      <Grid item lg={3} md={3} xs={3} style={{ textAlign: "center" }} >
                        <FontAwesomeIcon icon={faCoffee} size="4x"/>
                      </Grid>
                      <Grid item lg={9} md={9} xs={9}>
                   
                          <h2>RE<span>S</span>UME</h2>
                          <h3>Check out my experience and skills.</h3>
                       
                        </Grid>
                      </Grid>
                    </IntroContent>
                </FullBackgroundImage>
              </MenuButton>
            </Paper>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            className={`${classes.masonryItem}`}
          >
            <Paper elevation={0} className={classes.paper}>
              <MenuButton id='projects'>
                <FullBackgroundImage srcSet='./img/portfolio.jpg'>
                  <IntroContent>
                      <>
                        <h2>PRO<span>J</span>ECTS</h2>
                        <h3>Have a look at Some Stuff I've Done.</h3>
                      </>
                    </IntroContent>
                </FullBackgroundImage>
              </MenuButton>
            </Paper>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            className={`${classes.masonryItem}`}
          >
            <Paper elevation={0} className={classes.paper}>
              <MenuButton id='contact'>
                <FullBackgroundImage srcSet='./img/contact.jpg'>
                  <IntroContent>
                      <>
    
                        <h2>CO<span>N</span>TACT</h2>
                        <h3>Want to say hello?</h3>
                      </>
                    </IntroContent>
                </FullBackgroundImage>
              </MenuButton>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      </animated.div> : null)}
  </>
  );
}

export default Home;