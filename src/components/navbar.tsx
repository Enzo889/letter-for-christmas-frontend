import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-fit mx-auto z-50">
      <div className="flex justify-center items-center gap-5  p-4 bg-red-300 shadow-lg">
        <Button variant="neutral">
          <Link href="/">Logo</Link>
        </Button>
        <Button variant="neutral">
          <Link
            href="https://github.com/Enzo889"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Link>
        </Button>
      </div>
    </nav>
  );
}
