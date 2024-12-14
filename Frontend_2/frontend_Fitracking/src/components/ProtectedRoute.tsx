import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/useUserContext";

const ProtectedRoute: React.FC = () => {
  const { user, loading } = useUserContext();

  // Wait for loading to complete before deciding
  if (loading) {
    return <p>Loading...</p>; // Optionally, show a loading indicator
  }

  if (!user || !user.id) {
    alert("You must log in to access this page.");
    return <Navigate to="/Login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;