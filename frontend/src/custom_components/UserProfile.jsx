import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";

export function UserProfile() {

  const navigate = useNavigate();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className=" w-96">
        <div className="flex justify-between space-x-4">
          
          <div className="space-y-2">
          <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Ashish Prajapati
          </h4>
          <small className="text-sm font-medium leading-none">Email address : </small>
          <p className="text-muted-foreground text-sm shadcn-light">prajapatiashish40567@gmail.com</p>
          <small className="text-sm font-medium leading-none">Phone no. : </small>
          <p className="text-muted-foreground text-sm shadcn-light">1234567890</p>
          <small className="text-sm font-medium leading-none">Address :</small>
          <p className="text-muted-foreground text-sm shadcn-light">India</p>

           
          <div className="flex gap-2">

            <Button variant='outline'  onClick={()=>{
              navigate("/settings")
            }}>Settings</Button>
            
           

            <Button className="bg-blue-500 hover:bg-blue-600 block sm:hidden" onClick={()=>{
              navigate("/postexperience")
            }}>Share Experince</Button>
          </div>

          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}