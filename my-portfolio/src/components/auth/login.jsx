import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const navigateToAdminDashboard = () => {
    navigate("/admin");
  };

  const handleLogin = async (email, password) => {
    console.log("Login btn clicked");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      //Function to navigate to adminDashboard after login
      navigateToAdminDashboard();
    } catch (error) {
      console.error("Error signing in:", error);
      alert('Signin error',error)
    }
  };

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={() => handleLogin()} type="submit">
          Login
        </button>
      </form>
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};

export default Login;
