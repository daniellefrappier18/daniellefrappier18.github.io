import React from 'react';
import Grid from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';

type ProjectsProps = {
    className?: string;
}


const Projects = ( {
  className
}: ProjectsProps ) => {
    return (
    <div><p>This is the Projects section</p>

    <MenuButton id='home'>test</MenuButton>
    
    </div>


    );
  }
  
  export default Projects;