import HelloUser from "@/components/hello-user";
import { Hat, MediaChristmas, Star4 } from "@/components/svg/svg";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, CandyCane } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 ">
      <header className="flex flex-col gap-6 items-center">
        <h1 className="flex font-bold max-sm:text-3xl max-md:text-4xl text-7xl max-md:gap-1 gap-5">
          Welcome <HelloUser />{" "}
        </h1>
        <p className=" max-sm:text-xl max-md:text-2xl text-5xl font-light">
          To letter for christmas{" "}
        </p>
      </header>
      <Hat className="absolute top-44 right-60 w-32 h-32 fill-black/80 max-lg:hidden" />
      <MediaChristmas className="absolute bottom-28 left-64 w-24 h-24  fill-black/80 max-lg:hidden" />
      <Star4 className="absolute bottom-28 right-60 w-32 h-32 fill-green-400 max-lg:hidden" />
      <CandyCane className="absolute top-48 left-64 w-32 h-32  fill-red-500/65 stroke-red-800/10 max-lg:hidden" />
      <main className="flex gap-10 max-sm:flex-col">
        <Link
          href="/cart/new"
          className={`${buttonVariants({
            variant: "default",
          })} flex gap-2 max-sm:h-9 max-sm:px-3 justify-center items-center`}
        >
          Create Letter <ArrowUpRight />
        </Link>
        <Link
          href="/collage"
          className={`${buttonVariants({
            variant: "default",
          })} flex gap-2 max-sm:h-9 max-sm:px-3 justify-center items-center`}
        >
          View Your Letter Collage <ArrowUpRight />{" "}
        </Link>
      </main>
      <footer className="md:hidden text-sm">
        {" "}
        Built by{" "}
        <Link
          target="_blank"
          className="text-primary underline-offset-4 underline"
          href="https://x.com/enzodev_"
        >
          Enzo
        </Link>
        . The source code is available on{" "}
        <Link
          className="text-primary underline-offset-4 underline"
          target="_blank"
          href="https://github.com/Enzo889"
        >
          Github
        </Link>
        .
      </footer>
    </div>
  );
}
