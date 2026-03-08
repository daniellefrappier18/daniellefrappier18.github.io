import React, { useContext } from "react";
import styled from 'styled-components';
import { Paper, Grid } from "@mui/material";
import { FullBackgroundImage } from "../components/FullBackgroundImage/full-background-image.component";
import { IntroContent } from "../components/IntroContent/intro-content.component";
import { SocialLink } from "../components/SocialLink/social-link.component";
import { ActiveSectionContext } from "../contexts/ActiveSectionContext";
import { MenuButton } from "../components/MenuButton/menu-button.component";
import { useTransition, animated } from "react-spring";
import Profile from "./Profile";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  faCode,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const HomeGrid = styled(Grid)`
  height: 100%;
  position: relative;

  @media screen and (min-width: 960px) {
    height: 100%;
    position: fixed;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0 !important;
  box-shadow: none !important;
`;

const StyledGridItem = styled(Grid)`
  box-sizing: border-box;
  padding: 0;
`;

const MasonryItem = styled(Grid)`
  box-sizing: border-box;
  padding: 0;

  @media screen and (min-width: 1280px) {
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

function Home() {
  const { currentSection } = useContext(ActiveSectionContext);
  const transitionHome = useTransition(currentSection === "home", {
    from: { y: -800, opacity: 1, height: "100%", width: "100%" },
    enter: { y: 0, opacity: 1, height: "100%", width: "100%" },
    leave: { y: 800, opacity: 0, height: "100%", width: "100%" },
  });

  const transitionPages = useTransition(currentSection !== "home", {
    from: { x: 800, opacity: 1, height: "100%", width: "100%" },
    enter: { x: 0, opacity: 1, height: "100%", width: "100%" },
  });

  return (
    <>
      {transitionPages((style, item) =>
        item ? (
          <animated.div style={style}>
            {currentSection === "profile" && <Profile />}
            {currentSection === "projects" && <Projects />}
            {currentSection === "resume" && <Resume />}
            {currentSection === "contact" && <Contact />}
          </animated.div>
        ) : null
      )}

      {transitionHome((style, item) =>
        item ? (
          <animated.div style={style}>
            <HomeGrid 
              container
              spacing={0}
            >
              <StyledGridItem
                item
                md={6}
                xs={12}
                id="main"
              >
                <StyledPaper elevation={0}>
                  <FullBackgroundImage
                    className="content-section"
                    srcSet="./img/danielle_frappier_bg.jpg"
                  >
                    <IntroContent
                      mainTitle="Hi there! My name is"
                      accentMainTitle=" Danielle"
                      subTitle="Front End Developer"
                    >
                      <div>
                      <SocialLink
                          icon={faLinkedin as IconDefinition}
                          aria-label="LinkedIn"
                          href="https://www.linkedin.com/in/daniellefrappier/"
                          target="_blank"
                        />
                        <SocialLink
                          icon={faGithub as IconDefinition}
                          aria-label="GitHub "
                          href="https://github.com/daniellefrappier18"
                          target="_blank"
                        />
                        <SocialLink
                          icon={faCodepen as IconDefinition}
                          aria-label="Codepen"
                          href="https://codepen.io/daniellefrapp/"
                          target="_blank"
                        />
                      </div>
                    </IntroContent>
                  </FullBackgroundImage>
                </StyledPaper>
              </StyledGridItem>
              <StyledGridItem
                item
                container
                md={6}
                xs={12}
                id="menu"
              >
                <MasonryItem
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <StyledPaper elevation={0}>
                    <MenuButton id="profile">
                      <FullBackgroundImage srcSet="./img/profile.jpg">
                        <IntroContent>
                          <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                            style={{ height: "100%" }}
                          >
                            <Grid
                              item
                              lg={3}
                              md={3}
                              xs={3}
                              style={{ textAlign: "center" }}
                            >
                              <FontAwesomeIcon icon={faIdBadge} size="4x" />
                            </Grid>
                            <Grid item lg={9} md={9} xs={9}>
                              <h2>
                                PR<span>O</span>FILE
                              </h2>
                              <h3>Some stuff about me.</h3>
                            </Grid>
                          </Grid>
                        </IntroContent>
                      </FullBackgroundImage>
                    </MenuButton>
                  </StyledPaper>
                </MasonryItem>
                <MasonryItem
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <StyledPaper elevation={0}>
                    <MenuButton id="resume">
                      <FullBackgroundImage srcSet="./img/resume.jpg">
                        <IntroContent>
                          <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                            style={{ height: "100%" }}
                          >
                            <Grid
                              item
                              lg={3}
                              md={3}
                              xs={3}
                              style={{ textAlign: "center" }}
                            >
                              <FontAwesomeIcon icon={faPaperPlane} size="4x" />
                            </Grid>
                            <Grid item lg={9} md={9} xs={9}>
                              <h2>
                                RE<span>S</span>UME
                              </h2>
                              <h3>Check out my experience and skills.</h3>
                            </Grid>
                          </Grid>
                        </IntroContent>
                      </FullBackgroundImage>
                    </MenuButton>
                  </StyledPaper>
                </MasonryItem>
                <MasonryItem
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <StyledPaper elevation={0}>
                    <MenuButton id="projects">
                      <FullBackgroundImage srcSet="./img/projects.jpg">
                        <IntroContent>
                          <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                            style={{ height: "100%" }}
                          >
                            <Grid
                              item
                              lg={3}
                              md={3}
                              xs={3}
                              style={{ textAlign: "center" }}
                            >
                              <FontAwesomeIcon icon={faCode} size="4x" />
                            </Grid>
                            <Grid item lg={9} md={9} xs={9}>
                              <h2>
                                P<span>R</span>OJECTS
                              </h2>
                              <h3>Have a look at some stuff I've done.</h3>
                            </Grid>
                          </Grid>
                        </IntroContent>
                      </FullBackgroundImage>
                    </MenuButton>
                  </StyledPaper>
                </MasonryItem>
                <MasonryItem
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <StyledPaper elevation={0}>
                    <MenuButton id="contact">
                      <FullBackgroundImage srcSet="./img/contact.jpg">
                        <IntroContent>
                          <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                            style={{ height: "100%" }}
                          >
                            <Grid
                              item
                              lg={3}
                              md={3}
                              xs={3}
                              style={{ textAlign: "center" }}
                            >
                              <FontAwesomeIcon icon={faComment} size="4x" />
                            </Grid>
                            <Grid item lg={9} md={9} xs={9}>
                              <h2>
                                CO<span>N</span>TACT
                              </h2>
                              <h3>Want to say hello?</h3>
                            </Grid>
                          </Grid>
                        </IntroContent>
                      </FullBackgroundImage>
                    </MenuButton>
                  </StyledPaper>
                </MasonryItem>
              </StyledGridItem>
            </HomeGrid >
          </animated.div>
        ) : null
      )}
    </>
  );
}

export default Home;
