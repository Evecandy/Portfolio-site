// import React, { useState } from 'react';
// import  {db} from '../../firebaseConfig'

// const BioEditor = () => {
//   const [bio, setBio] = useState('');

//   const handleSave = async () => {
//     await db.collection('portfolio').doc('bio').set({ content: bio });
//     alert('Bio updated successfully!');
//   };

//   return (
//     <div>
//       <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
//       <button onClick={handleSave}>Save Bio</button>
//     </div>
//   );
// };

// export default BioEditor;
