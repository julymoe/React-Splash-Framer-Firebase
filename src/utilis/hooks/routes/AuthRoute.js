import React, { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Gallery from "../../../Page/Gallery";
import Login from "../../../Page/Login";
import AppContext from "../../../store/AppContext";

export default function AuthRoute(props) {
  const [isLoggedIn] = useContext(AppContext);
  if (isLoggedIn) return <Route {...props} />;
  return <Route path="/login" element={<Navigate to="/login" />} />;
}
