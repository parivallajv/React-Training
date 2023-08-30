import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ isAuth }) => {
  let auth = { token: isAuth };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
