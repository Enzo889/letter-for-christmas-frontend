import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { GithubIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b-2 border-b-black bg-white">
      <div className="flex justify-between  p-7 max-sm:p-4 ">
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="uppercase font-bold text-3xl max-sm:text-xl"
          >
            Letter For Christmas
          </Link>
        </div>
        <div className="flex gap-7 justify-center items-center ">
          <Button variant="neutral" className="max-sm:hidden">
            <Link
              href="https://x.com/enzodev_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 m500:h-4 m500:w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className="fill-text dark:fill-darkText"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                ></path>
              </svg>
            </Link>
          </Button>
          <Button variant="neutral" className="max-sm:hidden">
            <Link
              href="https://github.com/Enzo889"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </Link>
          </Button>
          <SignedOut>
            <Button variant={"neutral"}>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant={"neutral"}>
              <UserButton />
            </Button>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
