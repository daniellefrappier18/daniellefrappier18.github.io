import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
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
    title: "Senior Design Systems Engineer",
    date: "/ September 2021 - Current",
    location: "Monster",
    description: (
      <>
      <li>Team lead for Randstad Brand Design System. Responsible for mentoring junior engineers, establishing code standards and best practices and making decisions on the architecture of the design system.</li>
      <li>Built React component library with TypeScript & Styled Components, wrote unit tests using Jest and React Testing Library and documented components in Storybook.</li>
      <li>Provided support for monster.com homepage built using Gatsby.</li>
      </>)
  },
  {
    title: "Front End Engineer",
    date: "/ January 2019 - September 2021",
    location: "John Hancock",
    description: (
      <>
      <li>Sole developer for web applications used by Sales, Marketing and Education departments to sell, promote and onboard clients and new users.</li>
      <li>Developed web applications using AngularJS and ReactJS/Context API.</li>
      <li>Responsible for adding future forward functionality to applications and maintaining code bases.</li>
      <li>Accountable for QA and release process for all assigned web applications.</li>
      <li>Developed UI/UX style guide and associated code via https://patternlab.io. This is used by application development teams across John Hancock to streamline common application assets.</li>
      </>)
  },
  {
    title: "Front End Engineer",
    date: "/ November 2017 - January 2019",
    location: "Applause",
    description: (
      <>
      <li>Lead migration and development of applause.com from contentful/middleman to CraftCMS.</li>
      <li>Identified areas on applause.com not accessible/WCAG 2.0 compliant and implemented changes to correct.</li>
      <li>Implemented OOCSS to allow for scalable and reusable code.</li>
      <li>Managed acquiring third party hosting and setup. Ensured a smooth transition from internal to outside hosting.</li>
      <li>Implemented new landing pages and emails in Marketo.</li>
      </>)
  },
  {
    title: "UX Designer/Developer",
    date: "/ September 2017 - November 2017",
    location: "Aetna",
    description: (
      <>
      <li>Created landing pages and email templates to be WCAG 2.0 compliant.</li>
      </>)
  },
  {
    title: "Senior Web Designer/Developer",
    date: "/ October 2015 - September 2017",
    location: "EH Media",
    description: (
      <>
      <li>Responsible for both back-end and front end development, including creating WordPress themes and plugins.</li>
      <li>Designed and implemented new functionality that lead to engaging product offerings to and generated higher revenue.</li>
      <li>Ensured high-performance and availability, and managed technical aspects of Wordpress sites.</li>
      </>)
  },
  {
    title: "Web Designer/Developer",
    date: "/ March 2013 - October 2015",
    location: "ACIS Educational Tours",
    description: (
      <>
      <li>Lead designer and coder for three brands: www.acis.com, www.encoretours.com and www.goplaytours.com.</li>
      <li>Designed and implemented landing pages and emails in Marketo, Hubspot and ClickDimensions platforms.</li>
      <li>Responsible for design, support and execution of Marketo landing pages and emails (previously was Hubspot).</li>
      <li>Designed tradeshow booths, print materials, infographics and ebooks.</li>
      </>)
  },
  {
    title: "Supervisor of Web Design",
    date: "/ October 2006 - March 2013",
    location: "MEDITECH",
    description: (
      <>
      <li>Promoted three times during tenure. Previous positions held were: Senior Web Designer and Graphic Designer.</li>
      <li>Responsible for the successful delivery and execution of web design projects for public web presence, corporate events and customer focused web magazine with a team of 5 designers.</li>
      <li>Identified and led migration from a home-grown CMS to Drupal which provided the company a more efficient and modern publishing platform to deliver Marketing, Sales and Company goals.</li>
      <li>Designed custom sales demos, many for proposals above $1 million dollars.</li>
      </>)
  },
];
const Skills = [
  {
    title: 'JavaScript',
    level: 80,
  },
  {
    title: 'TypeScript',
    level: 40,
  },
  {
    title: 'React',
    level: 80,
  },
  {
    title: 'Styled Components',
    level: 70,
  },
  {
    title: 'Jest',
    level: 30,
  },
  {
    title: 'React Testing Library',
    level: 30,
  },
  {
    title: 'AngularJS',
    level: 40,
  },
];
const Subtitle = 
  <>
  See full list on <a href="./docs/Danielle-Frappier-Resume-2025.pdf" target="_blank">resume</a>.
  </>;
const Education = [
  {
    title: "Framingham State University",
    date: " / 2001 - 2006",
    description: (
      <>
      <li>BA, Graphic Design</li>
      <li>Minors in Computer Science and Communication Arts</li>
      </>)
  },
  {
    title: "Online Courses",
    date: " / Google / Codecademy / Mijingo / AGI Training",
    description: (
      <>
      <li>Google SEO Certification - 2025</li>
      <li>Google SEO Certification - 2025</li>
      <li>Codecademy Courses - 2017 - 2019 <br/>
      jQuery<br/>
      Saas<br/>
      Javascript<br/>
      PHP<br/>
      AngularJS 1.X<br/>
      Learn ReactJS: Part I<br/>
      Learn ReactJS: Part II
      </li>
      <li>Mijingo Courses - 2018 <br/>
      Craft CMS Essentials<br/>
      Flexible Twig Templates in Craft<br/>
      Up and Running with ExpressionEngine
      </li>
      <li>UX Design - AGI Training - 2014</li>
      <li>HTML5 - 2012</li>
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
              <p>You can download my Resume in pdf and docx format below. Or scroll on to read more about my experience, skills and education.</p>
              <Button buttonType='primary' style={{display: 'inline-block'}} href='./docs/Danielle-Frappier-Resume-2025.pdf' target='_blank'>Download Resume (PDF)</Button>
              <Button buttonType='secondary' style={{display: 'inline-block'}} href='./docs/Danielle-Frappier-Resume-2025.docx' target='_blank'>Download Resume (DOCS)</Button>
              <Timeline title='Work Experience' jobs={Jobs} />
              <SkillSection title = 'Skills' subtitle={Subtitle} skills={Skills} />
              <Timeline title='Education' jobs={Education} />
          </Container>
        </Grid>
      </Grid>
    );
  }
  
  export default Resume;