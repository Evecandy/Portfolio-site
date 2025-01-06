import React, { useState } from 'react';
import  {db} from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore';

const BioEditor = () => {
  const [bio, setBio] = useState('');

  const handleSave = async () => 
    {
        try {
          const bioRef = doc(db, 'portfolio', 'bio'); // Reference to the 'bio' document
          await setDoc(bioRef, { content: bio }); // Save the bio content
          alert('Bio updated successfully!');
        } catch (error) {
          console.error('Error saving bio:', error);
          alert('Failed to save bio. Please try again.');
        }
      };
//     {
//     await setDoc(bioRef, { content: bio });
//     alert('Bio updated successfully!');
//   };

  return (
    <div>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      <button onClick={handleSave}>Save Bio</button>
    </div>
  );
};

export default BioEditor;
