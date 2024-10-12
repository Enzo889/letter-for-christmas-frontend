import HelloUser from "@/components/hello-user";
import {
  Hat,
  MediaChristmas,
  Star1,
  Star2,
  Star3,
  Star4,
} from "@/components/svg/svg";
import { Button } from "@/components/ui/button";
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
      <Hat className="absolute top-44 right-60 w-32 h-32 fill-black/80 max-md:hidden" />
      <MediaChristmas className="absolute bottom-28 left-64 w-24 h-24  fill-black/80 max-md:hidden" />
      <Star4 className="absolute bottom-28 right-60 w-32 h-32 fill-green-400 max-md:hidden" />
      <CandyCane className="absolute top-48 left-64 w-32 h-32  fill-red-500/65 stroke-red-800/10 max-md:hidden" />
      <main className="flex gap-10">
        <Button variant={"default"} className="max-sm:h-9 max-sm:px-3">
          <Link
            href="/cart/new"
            className="flex gap-2 justify-center items-center"
          >
            Create Letter <ArrowUpRight />
          </Link>
        </Button>
        <Button variant={"default"} className="max-sm:h-9 max-sm:px-3">
          <Link
            href="/collage"
            className="flex gap-2 justify-center items-center"
          >
            View Your Letter Collage <ArrowUpRight />{" "}
          </Link>
        </Button>
      </main>
    </div>
  );
}
