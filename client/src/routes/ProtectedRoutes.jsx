import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const user = getUser();
  console.log("user", user);
  console.log("end run");
  return user ? <>{children}</> : <Navigate to="/" />;
}

export default ProtectedRoutes;
