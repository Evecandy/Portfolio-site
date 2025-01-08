import React, { useEffect, useState } from 'react';
import  db  from '../../firebaseConfig'; // Import Firestore configuration
import { doc, getDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   // other Firebase configuration
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };



const Bio = () => {
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchBio = async () => {
      try {
        // Create a reference to the "bio" document in the "portfolio" collection
        const bioDocRef = doc(db, 'portfolio', 'bio');
        const bioDoc = await getDoc(bioDocRef);

        if (bioDoc.exists()) {
          setBio(bioDoc.data().content);
        } else {
          setBio('No bio available. Please update your bio in the admin dashboard.');
        }
      } catch (error) {
        console.error('Error fetching bio:', error);
        setBio('Error loading bio. Please try again later.');
      }
    };
    fetchBio();
  }, []);

  return (
    <div className="bio-section">
      <h2>About Me</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Bio;
