import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import AppContext from "../store/AppContext";

const Header = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, user] = useContext(AppContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //setIsLoggedIn(false);
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <nav className="bg-gray-900 text-white py-3 px-10 flex justify-between">
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "underline text-blue-200" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={(navData) =>
              navData.isActive ? "underline text-blue-200" : ""
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tensorflow"
            className={(navData) =>
              navData.isActive ? "underline text-blue-200" : ""
            }
          >
            Tensorflow
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-5">
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive ? "underline text-blue-200" : ""
              }
            >
              Login
            </NavLink>
          )}
        </li>
        <li>
          {!isLoggedIn && (
            <NavLink
              to="/signup"
              className={(navData) =>
                navData.isActive ? "underline text-blue-200" : ""
              }
            >
              Signup
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
