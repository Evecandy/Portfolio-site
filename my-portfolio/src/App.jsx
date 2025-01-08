import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./components/admin/protectedRoutes";
import Login from "./components/auth/login";
// import AdminDashboard from "./components/admin/dashboard";
import PublicView from "./components/publicView";
import "./App.css";
import AdminDashboard from "./components/admin/dashboard";
// require('dotenv').config();


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicView/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
