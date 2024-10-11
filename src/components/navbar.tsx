import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className="w-fit mx-auto">
      <div className="flex p-4 bg-red-300 gap-4">
        <Link className={buttonVariants({ variant: "link" })} href={"/"}>
          Logo
        </Link>
        <Link
          className={buttonVariants({ variant: "link" })}
          href={"https://github.com/Enzo889"}
          target="_blank"
        >
          Source
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
