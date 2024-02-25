import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/App";
import { createUser } from "@/Services/UserService";

export function RegisterForm() {
  const { isLoggedIn, setIsLoggedIn, setRefresh  } = React.useContext(AppContext);

  const navigate = useNavigate();

  const storeIndb = async (uid, name, email) => {
      const data = {
        id: uid,
        email: email,
        name: name,
        phone: null,
        currentCompany: null,
        linkedin: null,
        github: null,
        role : null,
      }
    
    // set role on basis of email if email contains @ddu.ac.in and first two characters are number < current year - 3 then role is alumni else student
    if (email.includes("@ddu.ac.in")) {
      const year = new Date().getFullYear();
      const roll = email.split("@")[0].substring(0, 2);
      console.log(roll);
      if (roll < year - 3) {
        data.role = "alumni";
      }
      else {
        data.role = "student";
      }
    }
    else {
      alert("Please enter valid email address contains @ddu.ac.in and first two characters are number."); 
      return;
    }


    
      await createUser(data).then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response));
        setIsLoggedIn(true);
        setRefresh((val) => !val);
        navigate("/");
      });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    // email must contain @ddu.ac.in
    if (!email.includes("@ddu.ac.in")) {
      alert("Please enter valid email");
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password).then(
        (response) => {
          console.log(response.user.uid);
          return response;
        }
      );

      if(response.user){
        storeIndb(response.user.uid, name, email);
      }

    } catch (error) {
      console.log(error);
    }
  }

  async function signInWithGoogle() {
    try {
      const response = await signInWithPopup(auth, googleProvider).then((response) => {

        // if user has selected email id which does not contain @ddu.ac.in then remove the user from firebase
        if (!response.user.email.includes("@ddu.ac.in")) {
          response.user.delete().then(() => {
            alert("Please enter valid email address contains @ddu.ac.in and first two characters are number.");
          });
          return;
        }

        return response;
      });

      if (response.user) {
        storeIndb(response.user.uid, response.user.displayName, response.user.email);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Ashish Prajapati"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input id="password" placeholder="******" type="password" />
        </div>
        <Button
          type="submit">
          Sign In with Email
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" onClick={signInWithGoogle}>
          <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
            <path
              fill="currentColor"
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
          </svg>
          Google
        </Button>
    </div>
      </form >
    </div >
  );
}
