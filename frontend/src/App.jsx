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
import { auth } from "./config/firebase";
import Contact from "./Pages/Contact";
import AddJob from "./Pages/AddJob";
import UpdatePost from "./Pages/UpdatePost";

export const AppContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh , setRefresh] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      localStorage.setItem("user", JSON.stringify(user));
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
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn , refresh , setRefresh }}>
        <Router>
          {isLoggedIn && location !== '/register' && location !== '/login' &&  <Navbar />}
      <div className="flex justify-center items-center h-full">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home/> : <Register/>}/>
            <Route path="/settings" element={isLoggedIn ? <Settings/> : <Register/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/experiences" element={isLoggedIn ? <Experiences/> : <Register/>} />
            <Route path="/post-experience" element={isLoggedIn ? <PostExperience /> : <Register/>} />
            <Route path="/alumni" element={isLoggedIn ? <Alumni/> : <Register/>}/>
            <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login />} />
            <Route path="/add-job" element={isLoggedIn ? <AddJob /> : <Register />} />
            <Route path="/update-post" element={isLoggedIn ? <UpdatePost/> : <Register/>}/>
          </Routes>
      </div>
        {isLoggedIn && location !== '/register' && location !== '/login' &&  <Footer />}
        </Router>
    </AppContext.Provider>
  );

}
