import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getUserById } from "@/Services/UserService";
import { AppContext } from "@/App";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

export function UserProfile() {
  const { refresh, setIsLoggedIn } = useContext(AppContext);
  
  const navigate = useNavigate();

  const uid = JSON.parse(localStorage.getItem("user")).uid;
  
  const [user, setUser] = useState();

  const getData = async () => {
    await getUserById(uid).then((response) => {
      setUser(response);
    });
  };

  useEffect(() => {
    getData();
  }, [refresh, uid]);

  let userDetails = [];
  // iterate through user properties and display them
  if (user) {
    userDetails = Object?.keys(user)?.map((key, index) => {
      // first key is the id, so we skip it
      if (key === "id" || key === "experiences") return null;

      // display_key is the key with the first letter capitalized
      let display_key = key.charAt(0).toUpperCase() + key.slice(1);

      if (user[key] === null) return null;

      return (
        <div key={index}>
          <small className="text-sm font-medium leading-none">
            {display_key} :{" "}
          </small>
          <p className="text-muted-foreground text-sm shadcn-light">
            {user[key]}
          </p>
        </div>
      );
    });
  }

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
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Avatar>
            <AvatarFallback>{user?.name[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className=" w-96">
        <div className="flex justify-between space-x-4">
          <div className="space-y-2">
            <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {user?.name}
            </h4>

            {userDetails}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                Edit Profile
              </Button>

              <Button
                className="bg-blue-500 hover:bg-blue-600 block sm:hidden"
                onClick={() => {
                  navigate("/post-experience");
                }}
              >
                Share Experince
              </Button>

              <Button
                className=" m-2 block sm:hidden"
                variant="outline"
                onClick={logOut}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
