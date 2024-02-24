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
import Alumni from "./Pages/Alumni";
// import { auth } from "./config/firebase";
import { auth } from "./config/firebase";
import Contact from "./Pages/Contact";

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

  const location = window.location.pathname;

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn , user , setUser }}>
        <Router>
          {isLoggedIn && location !== '/register' && location !== '/login' &&  <Navbar />}
      <div className="flex justify-center items-center h-full">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home/> : <Login/>}/>
            <Route path="/settings" element={isLoggedIn ? <Settings/> : <Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/experiences" element={<Experiences/>} />
            <Route path="/post-experience" element={isLoggedIn ? <PostExperience /> : <Login/>} />
            <Route path="/alumni" element={<Alumni/>}/>
            <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login/>} />
          </Routes>
      </div>
        {isLoggedIn && location !== '/register' && location !== '/login' &&  <Footer />}
        </Router>
    </AppContext.Provider>
  );

}
