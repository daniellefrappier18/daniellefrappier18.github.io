import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
import { MenuButton } from "../components/MenuButton/menu-button.component";
import { SocialLink } from "../components/SocialLink/social-link.component";
import { FullBackgroundImage } from "../components/FullBackgroundImage/full-background-image.component";
import { IntroContent } from "../components/IntroContent/intro-content.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faJsfiddle,
} from "@fortawesome/free-brands-svg-icons";

type ContactProps = {
  className?: string;
};

const sectionTitle = (
  <>
    cont<span>a</span>ct
  </>
);

const Contact = ({ className }: ContactProps) => {
  return (
    <Grid container spacing={0} style={{ height: "100%" }}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <FullBackgroundImage
          className="content-section"
          srcSet="./img/contact.jpg"
        >
          <IntroContent sectionTitle={sectionTitle} />
        </FullBackgroundImage>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <MenuButton className="close" id="home">
          <>
            Close <FontAwesomeIcon icon={faXmark} />
          </>
        </MenuButton>
        <Container className="content">
          <h2 className="section-title">Drop me a line!</h2>
          <p>
            Do you want to work together on a project? <br />
            Do you have a question or comment? <br />
            Or do you just want to say hello?
          </p>
          <h3 className="section-title">
            You can find me on the following platforms, please reach out and say
            hello!
          </h3>{" "}
          <SocialLink
            icon={faGithub as IconDefinition}
            aria-label="LinkedIn"
            href="https://github.com/daniellefrappier18"
            target="_blank"
          />
          <SocialLink
            icon={faLinkedin as IconDefinition}
            aria-label="GitHub"
            href="ttps://www.linkedin.com/in/daniellefrappier/"
            target="_blank"
          />
          <SocialLink
            icon={faCodepen as IconDefinition}
            aria-label="Codepen"
            href="https://codepen.io/daniellefrapp/"
            target="_blank"
          />
          <SocialLink
            icon={faJsfiddle as IconDefinition}
            aria-label="Codepen"
            href="https://jsfiddle.net/user/daniellefrappier/fiddles/"
            target="_blank"
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Contact;
