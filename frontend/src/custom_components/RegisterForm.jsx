import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
// import { auth, googleProvider } from "../config/firebase";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/App";

export function RegisterForm() {
  const { isLoggedIn, setIsLoggedIn , user ,setUser } = React.useContext(AppContext);

  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
      const password = event.target.password.value;
      
      console.log(email + " " + password);

    // try {
    //   await createUserWithEmailAndPassword(auth, email, password).then(
    //     (response) => {
    //       setIsLoggedIn(true);
    //       setUser(response.user);
    //       navigate("/");
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  }

//   async function signInWithGoogle() {
//     try {
//       await signInWithPopup(auth, googleProvider).then((response) => {
//         setIsLoggedIn(true);
//         navigate("/");
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
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
                    type = "submit"
                  >Sign In with Email</Button>
        </div>
      </form>
    </div>
  );
}
