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
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={className}>
          profile image goes here
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={className}>
          <MenuButton id='home'>test</MenuButton>
          <div><p>This is the profile section</p></div>
        </Grid>
      </Grid>

    



    );
  }
  
  export default Profile;