import Image from "next/image";
import React from "react";
import { ModeToggle } from "./mode-toggler";
import { Github } from "lucide-react";

const navbar = () => {
  return (
    // <div>
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="h-full items-center flex justify-between mx-auto">
        <div className="flex items-center gap-5 ml-12">
          <Image src={"./logo-new.svg"} width={100} height={100} alt="logo" />
        </div>
        <div className="flex items-center gap-5 mr-12">
          <ModeToggle />
          <Github width={16} height={16} />
        </div>
        {/* <div className="flex items-center gap-5 mr-12">
        </div> */}
      </div>
    </nav>
    // </div>
  );
};

export default navbar;