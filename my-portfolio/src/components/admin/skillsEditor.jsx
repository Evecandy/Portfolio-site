import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const SkillsEditor = () => {
  const [skills, setSkills] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsRef = doc(db, "portfolio", "skills"); // Reference to the 'skills' document
        const skillsDoc = await getDoc(skillsRef); // Fetch the document
        if (skillsDoc.exists()) {
          setSkills(skillsDoc.data().skill1 || ""); // Set the skills content in state
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
        alert("Failed to fetch skills. Please try again.");
      } finally {
        setIsLoading(false); // Update the loading status
      }
    };

    fetchSkills();
  }, []);

  const handleSave = async () => {
    try {
      const skillsRef = doc(db, "portfolio", "skills"); // Reference to the 'bio' document
      await setDoc(skillsRef, { skill1: skills }); // Save the bio content
      alert("Skills updated successfully!");
    } catch (error) {
      console.error("Error saving skills:", error);
      alert("Failed to save skills. Please try again.");
    }
  };
  //     {
  //     await setDoc(bioRef, { content: bio });
  //     alert('Bio updated successfully!');
  //   };

  return (
    <div>
      {isLoading ? (
        <p> Loading...</p>
      ) : (
        <>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Edit your skills here"
            rows={6}
            cols={40}
          />
          <button onClick={handleSave}>Save Skills</button>
        </>
      )}
    </div>
  );
};

export default SkillsEditor;
