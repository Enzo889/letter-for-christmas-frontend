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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export default function LetterCard({ letter }: any) {
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
            <Button
              variant={"default"}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/cart/${letter.id}/edit`);
              }}
            >
              Edit Letter
            </Button>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(letter.id);
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
