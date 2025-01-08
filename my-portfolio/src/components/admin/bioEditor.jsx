import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const BioEditor = () => {
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const bioRef = doc(db, "portfolio", "bio"); // Reference to the 'bio' document
        const bioDoc = await getDoc(bioRef); // Fetch the document
        if (bioDoc.exists()) {
          setBio(bioDoc.data().content || ""); // Set the bio content in state
        }
      } catch (error) {
        console.error("Error fetching bio:", error);
        alert("Failed to fetch bio. Please try again.");
      } finally {
        setIsLoading(false); // Update the loading status
      }
    };

    fetchBio();
  }, []);

  const handleSave = async () => {
    try {
      const bioRef = doc(db, "portfolio", "bio"); // Reference to the 'bio' document
      await setDoc(bioRef, { content: bio }); // Save the bio content
      alert("Bio updated successfully!");
    } catch (error) {
      console.error("Error saving bio:", error);
      alert("Failed to save bio. Please try again.");
    }
  };
  //     {
  //     await setDoc(bioRef, { content: bio });
  //     alert('Bio updated successfully!');
  //   };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
      <>
        <textarea 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
            placeholder="Edit your bio here"
          />
          <button onClick={handleSave}>Save Bio</button>
      </>
      )}
    </div>
  );
};

export default BioEditor;
