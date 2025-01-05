import React, { useEffect, useState } from 'react';
import  db  from '../../firebaseConfig'; // Import Firestore configuration
import { doc, getDoc } from "firebase/firestore";

const Skills = () => {
  const [skills, setSkills] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Create a reference to the "skills" document in the "portfolio" collection
        const skillsDocRef = doc(db, 'portfolio', 'skills');
        const skillsDoc = await getDoc(skillsDocRef);
        //console.log('Skills document:', skillsDoc.exists(), skillsDoc.data());
        //console.log(skillsDoc.data());
        if (skillsDoc.exists()) {
          setSkills(skillsDoc.data().skill1);
        } else {
          setSkills('No skills available. Please update your skills in the admin dashboard.');
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
        setSkills('Error loading skills. Please try again later.');
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <p>{skills}</p>
    </div>
  );
};

export default Skills;
