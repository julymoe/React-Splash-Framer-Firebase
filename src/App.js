import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./assets/css/style.css";
import routess from "./utilis/hooks/routess";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Header from "./components/Header";
import AppContext from "./store/AppContext";
import AuthRoute from "./utilis/hooks/routes/AuthRoute";
import Gallery from "./Page/Gallery";
import NotFound from "./Page/NotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        //const uid = user.uid;
        // ...
      } else {
        // User is signed out
        setUser({});
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Routes>
          {routess.map((rts, index) => {
            if (rts.path === "/login") {
              if (isLoggedIn)
                return (
                  <Route path="/" element={<Navigate replace to="/home" />} />
                );
            }
            // if (rts.path === "/gallery") {
            //   if (isLoggedIn)
            //     return (
            //       <AuthRoute
            //         path={rts.path}
            //         element={rts.element}
            //         key={index}
            //       />
            //     );
            // }
            return <Route path={rts.path} element={rts.element} key={index} />;
          })}
          <Route path="*" element={<NotFound />} />;
        </Routes>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
