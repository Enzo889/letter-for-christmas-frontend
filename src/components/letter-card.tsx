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
import { Dancing_Script } from "next/font/google";

export const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
});

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
            <CardTitle className={`${dancing.className} text-4xl`}>
              <p>Dear {letter.recipient},</p>
              <p className="text-3xl font-normal">
                My name is {letter.sender}.
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className={`${dancing.className} text-2xl`}>
            {letter.message ? letter.message : "no message"}
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
