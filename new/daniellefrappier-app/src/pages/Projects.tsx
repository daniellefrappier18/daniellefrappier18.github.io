import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';
import { ProjectsSection } from '../components/ProjectsSection/projects-section.component';
import { Button } from '../components/Button/button.component';
import { FullBackgroundImage } from "../components/FullBackgroundImage/full-background-image.component";
import { IntroContent } from '../components/IntroContent/intro-content.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ResumeProps = {
    className?: string;
}

const sectionTitle = <>pro<span>j</span>ects</>;
const PersonalProjects = [
  {
    title: 'Storybook for this wesite',
    description: 'Check out the components I used to build this website on Storybook',
    builtWith: 'React • Typescript • Storybook',
    children: <Button buttonType='primary' size='small' href='../storybook-static/index.html?path=/story/components-button--details' target='_blank'>View Project</Button>,
  },
  {
    title: 'Is Today a Good Day to go to the Beach?',
    description: 'Have you ever thought... "Hey self, is today a good day to go to the beach?" Well you are in the right place! Use this handy dandy tool and see if today is a good beach day for you!',
    builtWith: 'React',
    children: <Button buttonType='primary' size='small' href='https://www.daniellefrappier.com/beachday/build/index.html' target='_blank'>View Project</Button>,
  },
];

const ProjectList = [
  {
    title: 'Orbit Design System',
    description: 'Legacy design system for Randstad Global, a leading staffing agency.',
    builtWith: 'JavaScript • Tailwind',
    children: <Button buttonType='primary' size='small' href='https://monster-ux-ui.github.io/orbit-design-system/prototype-randstad/index.html' target='_blank'>View Project</Button>,
  },
  {
    title: 'John Hancock My Life Now Web Application Demo',
    description: 'Smart enough to know who your participants are and to help them take their best next steps.',
    builtWith: 'AngularJS • HTML/LESS',
    children: <Button buttonType='primary' size='small' href='https://demos.retirement.jhancock.com/#!/auth/login' target='_blank'>View Project</Button>,
  },
  {
    title: 'John Hancock Mobile Application Demo',
    description: 'Providing on the go plan access to participants.',
    builtWith: 'AngularJS • HTML/LESS',
    children: <Button buttonType='primary' size='small' href='https://demos.retirement.jhancock.com/#!/mobile-app-login' target='_blank'>View Project</Button>,
  },
  {
    title: 'John Hancock Client Access Web Application Demo',
    description: 'Web Application that offers Plan Sponsor Website Insight, perspective, and analysis.',
    builtWith: 'React • HTML/SCSS',
    children: <Button buttonType='primary' size='small' href='https://demos.retirement.jhancock.com/client-demo/index.html#/' target='_blank'>View Project</Button>,
  },
  {
    title: 'Applause Marketing Website',
    description: 'New site for Applause with a heavy focus on accessibility, SEO and pagespeed.',
    builtWith: 'CraftCMS(Twig) • HTML/SCSS • Bulma Framework • JavaScript',
    children: <Button buttonType='primary' size='small' href='https://www.applause.com/' target='_blank'>View Project</Button>,
  },
  {
    title: 'Campus Safety Magazine',
    description: 'Custom theme design and development for Campus Safety Magazine, a division of EH Publishing.',
    builtWith: 'Wordpress • HTML/CSS • JavaScript',
    children: <Button buttonType='primary' size='small' href='https://www.campussafetymagazine.com' target='_blank'>View Project</Button>,
  },
  {
    title: 'Encore Tours',
    description: 'Designed and developed a new website for Encore Tours.',
    builtWith: 'ColdFusion • HTML/CSS • JavaScript • Bootstrap',
    children: <Button buttonType='primary' size='small' href='https://www.encoretours.com/' target='_blank'>View Project</Button>,
  },
  {
    title: 'EH Media Corporate Site',
    description: 'Custom Genesis child theme for EH Media corporate site. Developed a workflow to capture and nurture leads within wordpress.',
    builtWith: 'Wordpress • Genesis • HTML/CSS • JavaScript',
    children: <Button buttonType='primary' size='small' href='https://www.ehmedia.com/' target='_blank'>View Project</Button>,
  },
  {
    title: 'Security Sales & Integration',
    description: 'Custom Theme development for Security Sales & Integration, a division of EH Publishing.',
    builtWith: 'Wordpress • HTML/CSS • JavaScript',
    children: <Button buttonType='primary' size='small' href='https://www.securitysales.com/' target='_blank'>View Project</Button>,
  },
  {
    title: 'Electronic House',
    description: 'Designed and developed a custom Genesis child Wordpress theme for Electronic House and plugin customization for installers directory.',
    builtWith: 'Wordpress • Genesis • HTML/CSS • JavaScript',
    children: <Button buttonType='primary' size='small' href='https://www.electronichouse.com/' target='_blank'>View Project</Button>,
  },
  {
    title: 'Tech Decisions',
    description: 'Migrated from Expression Engine to Wordpress. Designed and developed a custom Genesis child Wordpress theme for Tech Decisions and plugin customization for installers directory.',
    builtWith: 'Wordpress • Genesis • HTML/CSS • JavaScript',
    children: <Button buttonType='primary' size='small' href='https://mytechdecisions.com/' target='_blank'>View Project</Button>,
  },
]

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
            <ProjectsSection projects={ProjectList} />

            <h2 className="section-title">Some personal projects.</h2>
            <ProjectsSection projects={PersonalProjects} />

          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Projects;