import React from 'react';

import BioEditor from './bioEditor';
import ProjectsEditor from './projectsEditor';
import SkillsEditor from './skillsEditor';
// require('dotenv').config();




function AdminDashboard() {
  

  return (
    <>
    <React.Fragment>
      <BioEditor />
      <ProjectsEditor />
      <SkillsEditor />
    </React.Fragment>


    </>
  )
}

export default AdminDashboard;
