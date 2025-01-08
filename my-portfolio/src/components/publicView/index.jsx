import React from 'react';
import NavBar from './navBar';
import Bio from './bio';
import Projects from './projects';
import Skills from './skills';

// require('dotenv').config();


function PublicView() {
  

  return (
    <>
    <React.Fragment>
      <NavBar/>
      <Bio />
      <Projects />
      <Skills />
    </React.Fragment>


    </>
  )
}

export default PublicView;
