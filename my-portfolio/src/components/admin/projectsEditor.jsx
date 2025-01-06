import React, { useState } from 'react';
import  {db} from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore';

const ProjectsEditor = () => {
  const [projects, setProjects] = useState('');

  const handleSave = async () => 
    {
        try {
          const projectsRef = doc(db, 'portfolio', 'projects'); // Reference to the 'bio' document
          await setDoc(projectsRef, { project1: projects }); // Save the bio content
          alert('Projects updated successfully!');
        } catch (error) {
          console.error('Error saving projects:', error);
          alert('Failed to save projects. Please try again.');
        }
      };
//     {
//     await setDoc(bioRef, { content: bio });
//     alert('Bio updated successfully!');
//   };

  return (
    <div>
      <textarea value={projects} onChange={(e) => setProjects(e.target.value)} />
      <button onClick={handleSave}>Save Projects</button>
    </div>
  );
};

export default ProjectsEditor;
