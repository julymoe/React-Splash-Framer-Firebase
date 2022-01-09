// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Gallery from "../../Page/Gallery";
import Home from "../../Page/Home";
import Login from "../../Page/Login";
import React from "react";
import SignUp from "../../Page/SignUp";
import Tensorflow from "../../Page/tensorflow";
// import Header from "../../components/Header";

// export default function Routess() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/tensorflow",
    element: <Tensorflow />,
  },
];
