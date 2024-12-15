import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Hook to access the authentication context

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // Optionally display a loading spinner or message
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
