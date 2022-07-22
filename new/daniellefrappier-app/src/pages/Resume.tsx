import React from 'react';
import Grid from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';

type ResumeProps = {
    className?: string;
}


const Resume = ( {
  className
}: ResumeProps ) => {
    return (
    <div><p>This is the Resume section</p>

    <MenuButton id='home'>test</MenuButton>
    
    </div>


    );
  }
  
  export default Resume;