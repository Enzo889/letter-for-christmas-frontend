import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <div className="w-full h-full">
      <div className="sticky bottom-2 left-10 w-full">
        <Navbar />
      </div>
      <main>
        <Button variant={"default"}>
          <Link href="/cart/new">Cart</Link>
        </Button>
        <Button variant={"default"}>
          <Link href="/collage">Collage</Link>
        </Button>
        <div>
          <h1>Home</h1>
        </div>
      </main>
    </div>
  );
}
