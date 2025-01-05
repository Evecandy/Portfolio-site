// import React, { useState } from 'react';
// import { db } from '../../firebaseConfig';

// const SkillsEditor = () => {
//   const [skills, setSkills] = useState('');

//   const handleSave = async () => {
//     await db.collection('portfolio').doc('skills').set({ content: skills });
//     alert('Skills updated successfully!');
//   };

//   return (
//     <div>
//       <textarea value={skills} onChange={(e) => setSkills(e.target.value)} />
//       <button onClick={handleSave}>Save Skills</button>
//     </div>
//   );
// };

// export default SkillsEditor;
