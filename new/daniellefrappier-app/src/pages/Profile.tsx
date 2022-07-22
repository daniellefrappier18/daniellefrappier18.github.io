import React from 'react';
import Grid from "@material-ui/core/Grid";
import { MenuButton } from '../components/MenuButton/menu-button.component';

type ProfileProps = {
    className?: string;
}


const Profile = ( {
  className
}: ProfileProps ) => {
    return (
    <div><p>This is the profile section</p>

    <MenuButton id='home'>test</MenuButton>
    
    </div>


    );
  }
  
  export default Profile;