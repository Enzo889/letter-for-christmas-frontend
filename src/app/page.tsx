import LetterCard from "@/components/letter-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCart } from "./cart/cart.api";

export const dynamic = "force-dynamic";
export default async function Home() {
  const letters = await getCart();

  return (
    <div className="w-screen h-screen">
      <h1>Hello world</h1>
      <Button variant="default">Hello world</Button>
      <Button variant="destructive">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
      <Button variant="link">Hello world</Button>
      <Button variant="outline">Hello world</Button>
      <Button variant="secondary">Hello world</Button>
      <Link href={"/cart/new"}>Cart</Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {letters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))}
      </div>
    </div>
  );
}
