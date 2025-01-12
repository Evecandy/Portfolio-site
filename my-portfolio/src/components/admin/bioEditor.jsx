import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const BioEditor = () => {
  const [bio, setBio] = useState(""); // Bio state
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch bio on component mount
  useEffect(() => {
    const fetchBio = async () => {
      try {
        const bioRef = doc(db, "portfolio", "bio");
        const bioDoc = await getDoc(bioRef);

        if (bioDoc.exists()) {
          setBio(bioDoc.data().content || ""); // Set fetched bio
        } else {
          console.warn("Bio document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching bio:", error);
        alert("Failed to load bio. Please try again.");
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    };

    fetchBio();
  }, []);

  // Save bio when the user clicks save
  const handleSave = async () => {
    try {
      const bioRef = doc(db, "portfolio", "bio"); // Reference to Firestore document
      await setDoc(bioRef, { content: bio }); // Save bio content
      alert("Bio updated successfully!");
    } catch (error) {
      console.error("Error saving bio:", error);
      alert("Failed to save bio. Please try again.");
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)} // Update state as user types
            placeholder="Edit your bio here"
            rows={6}
            cols={40}
          />
          <br />
          <button onClick={handleSave}>Save Bio</button>
        </div>
      )}
    </div>
  );
};

export default BioEditor;