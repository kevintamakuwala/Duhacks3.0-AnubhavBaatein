import { createContext, useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./Pages/Login";
import Register from "./Pages/Register";
import Settings from "./Pages/Settings";
import Experiences from "./Pages/Experiences";
import Navbar from "./custom_components/Navbar";
import Footer from "./custom_components/Footer";
import Home from "./Pages/Home";
import PostExperience from "./Pages/PostExperience";
import { auth } from "./config/firebase";

export const AppContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  console.log(auth?.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn , user , setUser }}>
        <Router>
          <Navbar />
      <div className="flex justify-center items-center h-full">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home/> : <Login/>}/>
            <Route path="/settings" element={<Settings/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/experiences" element={<Experiences/>} />
            <Route path="/postexperience" element={<PostExperience />} />
          </Routes>
      </div>
        <Footer />
        </Router>
    </AppContext.Provider>
  );
}
