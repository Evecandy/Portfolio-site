// import React, { useState } from 'react';
// import { db } from '../../firebaseConfig';

// const ProjectsEditor = () => {
//   const [projects, setProjects] = useState('');

//   const handleSave = async () => {
//     await db.collection('portfolio').doc('projects').set({ content: projects });
//     alert('Projects updated successfully!');
//   };

//   return (
//     <div>
//       <textarea value={projects} onChange={(e) => setProjects(e.target.value)} />
//       <button onClick={handleSave}>Save Projects</button>
//     </div>
//   );
// };

// export default ProjectsEditor;
