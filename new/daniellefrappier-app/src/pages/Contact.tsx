import React from 'react';
import Grid from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';

type ContactProps = {
    className?: string;
}


const Contact = ( {
  className
}: ContactProps ) => {
    return (
    <div><p>This is the Contact section</p>

    <MenuButton id='home'>test</MenuButton>
    
    </div>


    );
  }
  
  export default Contact;