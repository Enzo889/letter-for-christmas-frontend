"use client";
import { deleteCart } from "@/app/cart/cart.api";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LetterCard({ letter }) {
  const router = useRouter();

  async function handleRemove(id: string) {
    await deleteCart(id);
    router.refresh();
  }

  return (
    <>
      <div>
        {" "}
        <Card key={letter.id}>
          {" "}
          <CardHeader>
            <CardTitle>
              {" "}
              {letter.sender} to {letter.recipient}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {letter.message}.
            <Link href={letter.drawingData} target="_blank">
              <iframe name="tldraw" src={letter.drawingData}></iframe>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"default"}> send to santa</Button>
            <Button
              variant={"destructive"}
              onClick={() => handleRemove(letter.id)}
            >
              {" "}
              delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
