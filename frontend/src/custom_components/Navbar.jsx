import React from "react";
import { UserProfile } from "./UserProfile";
import { MainNav } from "./MainNav";
import SubNav from "./SubNav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
  <div className="border-b w-full">
        <div className="flex h-14 justify-center items-center bg-slate-200">
          <MainNav />
        </div>
      </div>

      <div className="flex justify-between items-center border-b h-16 w-full">
        <SubNav />
        <div className="sm:mr-6 flex items-center">
            <UserProfile />
            <Button className="bg-blue-500 hover:bg-blue-600 hidden sm:block" onClick={()=>{
              navigate("/post-experience")
            }}>Share Experince</Button>
          </div>
      </div>

      </>
  );
};

export default Navbar;