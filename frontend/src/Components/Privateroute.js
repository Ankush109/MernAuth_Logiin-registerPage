import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page

  return localStorage.getItem("authtoken") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedRoute;
