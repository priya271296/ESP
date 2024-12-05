import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstLanding from "./FirstLanding";
import ForgetPassword from "./forgetPassword";
import LandingPage from "./landingpage"; // Make sure the file name and path are correct
import Login from "./login";
import Signup from "./signup";

function App() {
  // Mock authentication function (replace with your real authentication logic)
  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken"); // Example: Check for an authentication token in localStorage
  };

  // ProtectedRoute Component
  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<FirstLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingpage" element={<LandingPage />} />
        {/* Protected Route */}
        <Route
          path="/landingpage"
          element={<ProtectedRoute element={<LandingPage />} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        {/* Login Page Route */}
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
