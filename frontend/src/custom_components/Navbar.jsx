import React, { useContext } from "react";
import { UserProfile } from "./UserProfile";
import { MainNav } from "./MainNav";
import SubNav from "./SubNav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { AppContext } from "@/App";

const Navbar = () => {

  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  async function logOut() {
    try {
      await signOut(auth).then((response) => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/register");
      });
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="border-b w-full">
        <div className="w-full flex h-14 justify-center items-center bg-slate-200">
          <MainNav />
        </div>
      </div>

      <div className="flex justify-between items-center border-b h-16 w-full">
        <SubNav />
        <div className="sm:mr-6 flex items-center">
          <UserProfile />
          <Button
            className="bg-blue-500 hover:bg-blue-600 hidden sm:block"
            onClick={() => {
              navigate("/post-experience");
            }}
          >
            Share Experince
          </Button>
          <Button className=" m-2 hidden sm:block" variant="outline" onClick={logOut}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
