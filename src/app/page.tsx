import HelloUser from "@/components/hello-user";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Link2 } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 ">
      <header className="flex flex-col gap-6 items-center">
        <h1 className="flex font-bold text-7xl gap-5">
          Welcome <HelloUser />{" "}
        </h1>
        <p className="text-5xl font-light">To letter for christmas </p>
      </header>

      <main className="flex gap-10">
        <Button variant={"default"}>
          <Link
            href="/cart/new"
            className="flex gap-2 justify-center items-center"
          >
            Create Letter <ArrowUpRight />
          </Link>
        </Button>
        <Button variant={"default"}>
          <Link
            href="/collage"
            className="flex gap-2 justify-center items-center"
          >
            Watch Collage <ArrowUpRight />{" "}
          </Link>
        </Button>
      </main>
    </div>
  );
}
