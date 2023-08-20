import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ isAuth }) => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
