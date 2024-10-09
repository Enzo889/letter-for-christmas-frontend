import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
    </div>
  );
}
