import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCart } from "./cart/cart.api";
import { Card, CardContent } from "@/components/ui/card";

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

      <div>
        {" "}
        {letters.map((letter) => (
          <Card key={letter.id}>
            {" "}
            <CardContent>
              <p>
                {letter.sender} to {letter.recipient}
              </p>
              {letter.message}

              <p>{letter.drawingData}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
