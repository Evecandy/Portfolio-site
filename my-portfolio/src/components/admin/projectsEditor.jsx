import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const ProjectsEditor = () => {
  const [projects, setProjects] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsRef = doc(db, "portfolio", "projects"); // Reference to the 'projects' document
        const projectsDoc = await getDoc(projectsRef); // Fetch the document
        if (projectsDoc.exists()) {
          setProjects(projectsDoc.data().project1 || ""); // Set the projects content in state
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        alert("Failed to fetch projects. Please try again.");
      } finally {
        setIsLoading(false); // Update the loading status
      }
    };

    fetchProjects();
  }, []);

  const handleSave = async () => {
    try {
      const projectsRef = doc(db, "portfolio", "projects"); // Reference to the 'bio' document
      await setDoc(projectsRef, { project1: projects }); // Save the bio content
      alert("Projects updated successfully!");
    } catch (error) {
      console.error("Error saving projects:", error);
      alert("Failed to save projects. Please try again.");
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
        value={projects}
        onChange={(e) => setProjects(e.target.value)}
        placeholder="Edit your projects here"
        rows={6}
        cols={40}
      />
      <button onClick={handleSave}>Save Projects</button>
      </>
      )} 
    </div>
  );
};

export default ProjectsEditor;
