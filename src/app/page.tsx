import DrawTL from "@/components/draw";
import Navbar from "@/components/navbar";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="sticky bottom-2 left-10 w-full">
        <Navbar />
      </div>
      <main>
        <Link href="/cart">Cart</Link>
        <Link href="/collage">Collage</Link>
        <div>
          <DrawTL />
        </div>
      </main>
    </div>
  );
}
