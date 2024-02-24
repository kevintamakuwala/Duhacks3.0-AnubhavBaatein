import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

function Search() {
  return (
    <div className="flex justify-center sm:justify-start space-x-2 ml-3">
      <div className="flex items-center border rounded-md px-3 py-2 h-full">
        <input
          type="search"
          placeholder="Search for jobs"
          className="outline-none flex-1"
        />
        <SearchIcon className="h-5 w-5" />
      </div>
      <Button className="max-w-full">Find Job</Button>
    </div>
  );
}

export default Search;
