import React, { useEffect, useState } from 'react';
import  db  from '../../firebaseConfig'; // Import Firestore configuration
import { doc, getDoc } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Create a reference to the "projects" document in the "portfolio" collection
        const projectsDocRef = doc(db, 'portfolio', 'projects');
        const projectsDoc = await getDoc(projectsDocRef);

        if (projectsDoc.exists()) {
          setProjects(projectsDoc.data().project1);
        } else {
          setProjects('No projects available. Please update your projects in the admin dashboard.');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects('Error loading projects. Please try again later.');
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <ul>{projects}</ul>
    </div>
  );
};

export default Projects;
