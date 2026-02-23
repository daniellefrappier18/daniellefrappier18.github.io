import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuButton } from '../components/MenuButton/menu-button.component';
import { Button } from '../components/Button/button.component';
import { FullBackgroundImage } from "../components/FullBackgroundImage/full-background-image.component";
import { Timeline } from "../components/Timeline/timeline.component";
import { IntroContent } from '../components/IntroContent/intro-content.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { SkillSection } from '../components/SkillSection/skill-section.component';

type ResumeProps = {
    className?: string;
}
const sectionTitle = <>re<span>s</span>ume</>;
const Jobs = [
    {
    title: "Senior Front-End Engineer",
    date: "/ November 2025 - Present",
    location: "Ketryx",
    description: (
      <>
      <li>Built production UI for AI workflows using Next.js, React, TypeScript, GraphQL, Prisma, and Tailwind CSS.</li>
      <li>Owned end-to-end UI/UX implementation for the AI product area, from design review through deployment.</li>
      <li>Delivered a prioritized Home dashboard that significantly improved user workflow efficiency.</li>
      <li>Developed reusable components documented in Storybook; implemented data-rich visualizations including a blast-radius chart.</li>
      <li>Wrote automated tests using React Testing Library and Cucumber; collaborated cross-functionally in an Agile environment.</li>
      </>)
  },
  {
    title: "Senior Design System Engineer",
    date: "/ November 2022 - August 2025",
    location: "Medallia",
    description: (
      <>
      <li>Solid Survey Design System (SolidJS): Contributed reusable, accessible UI components powering Medallia's survey platform using SolidJS, Vite, and Storybook.</li>
      <li>Alchemy Design System (React): Enhanced and maintained a React/TypeScript/Styled Components library, building new components from scratch and resolving high-priority bug and accessibility tickets.</li>
      <li>Authored clear, developer-focused documentation for new and updated components, improving onboarding and adoption across engineering teams.</li>
      <li>Partnered cross-functionally with designers, product managers, and engineers to ensure consistent design patterns and component reusability.</li>
      <li>Implemented and executed automated testing with Jest, Storybook, and Playwright to ensure component stability, accessibility compliance, and cross-browser reliability.</li>
      </>)
  },
  {
    title: "Senior Design System Engineer",
    date: "/ September 2021 - November 2022",
    location: "Monster / Randstad",
    description: (
      <>
      <li>Team lead for Randstad Brand Design System — responsible for mentoring junior engineers, establishing code standards, and driving architecture decisions.</li>
      <li>Built a comprehensive React component library with TypeScript and Styled Components; achieved full automated test coverage.</li>
      <li>Documented all components and usage guidelines extensively in Storybook for adoption across engineering teams.</li>
      <li>Provided frontend support for the monster.com homepage built with Gatsby.</li>
      </>)
  },
  {
    title: "Frontend Engineer",
    date: "/ January 2019 - September 2021",
    location: "John Hancock",
    description: (
      <>
      <li>Sole developer for web applications used by Sales, Marketing, and Education departments to sell, promote, and onboard clients.</li>
      <li>Developed responsive applications using AngularJS and React/Context API; modernized legacy systems by migrating to ES6+.</li>
      <li>Owned QA and release process for all assigned web applications.</li>
      </>)
  },
  {
    title: "Front-End Developer",
    date: "/ November 2017 - January 2019",
    location: "Applause",
    description: (
      <>
      <li>Led migration of applause.com from Contentful/Middleman to CraftCMS; implemented new landing pages and Marketo email campaigns.</li>
      <li>Identified and remediated WCAG 2.0 accessibility gaps across the site.</li>
      </>)
  },
  {
    title: "Supervisor of Web Design",
    date: "/ October 2006 - March 2013",
    location: "MEDITECH",
    description: (
      <>
      <li>Promoted three times (Graphic Designer → Senior Web Designer → Supervisor); led a team delivering web design projects for public web presence, corporate events, and a customer-focused web magazine.</li>
      <li>Identified and led migration from a home-grown CMS to Drupal, providing a more efficient and modern publishing platform.</li>
      </>)
  },
];
const Skills = [
  {
    title: 'React',
    level: 90,
  },
  {
    title: 'Next.js',
    level: 70,
  },
  {
    title: 'TypeScript',
    level: 80,
  },
  {
    title: 'JavaScript (ES6+)',
    level: 90,
  },
  {
    title: 'SolidJS',
    level: 70,
  },
  {
    title: 'HTML5 / CSS3',
    level: 95,
  },
  {
    title: 'MUI (Material-UI)',
    level: 80,
  },
  {
    title: 'Tailwind CSS',
    level: 75,
  },
  {
    title: 'Styled Components',
    level: 85,
  },
  {
    title: 'GraphQL',
    level: 65,
  },
  {
    title: 'React Testing Library',
    level: 70,
  },
  {
    title: 'Jest',
    level: 70,
  },
  {
    title: 'Playwright',
    level: 60,
  },
  {
    title: 'Storybook',
    level: 85,
  },
  {
    title: 'Vite / Webpack',
    level: 75,
  },
  {
    title: 'Git / GitHub Actions',
    level: 80,
  },
];
const ProfessionalSummary = "Senior Front-End Engineer with 10+ years of experience building scalable, accessible user interfaces for enterprise SaaS platforms, AI products, and high-traffic web applications. Deep expertise in React, TypeScript, and modern frontend architecture, with a strong design sensibility that bridges the gap between engineering and UX. Proven track record leading design system initiatives, mentoring engineers, and delivering pixel-perfect implementations from Figma to production.";

const Education = [
  {
    title: "Framingham State University",
    date: " / 2001 - 2006",
    description: (
      <>
      <li>BA, Graphic Design</li>
      <li>Minors in Computer Science and Communication Arts</li>
      </>)
  }
];


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
              <p>{ProfessionalSummary}</p>
              <p>You can download my Resume in pdf and docx format below. Or scroll on to read more about my experience, skills and education.</p>
              <Button buttonType='primary' style={{display: 'inline-block'}} href='./docs/Danielle-Frappier-Resume-2026.pdf' target='_blank'>Download Resume (PDF)</Button>
              <Button buttonType='secondary' style={{display: 'inline-block'}} href='./docs/Danielle-Frappier-Resume-2026.docx' target='_blank'>Download Resume (DOCS)</Button>
              <Timeline title='Work Experience' jobs={Jobs} />
              <SkillSection title = 'Core Skills' skills={Skills} />
              <Timeline title='Education' jobs={Education} />
          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Resume;