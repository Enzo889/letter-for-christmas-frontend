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
import { TldrawImage } from "tldraw";
import { toast } from "sonner";
import { LetterWithletter } from "@/app/cart/new/cart-form";

export const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
});

interface ResponseData {
  name: string;
}

export default function LetterCard({ letter }: LetterWithletter) {
  const router = useRouter();

  let parsedData = null;
  if (letter?.drawingData && letter.drawingData.trim() !== "") {
    try {
      parsedData = JSON.parse(letter.drawingData);
    } catch (error) {
      console.error("Error parsing JSON: ", error);
    }
  } else {
    console.log("drawingData is empty or null for ID: ", letter?.id);
  }
  async function handleRemove(id: string) {
    await deleteCart(id);
    router.refresh();
  }

  return (
    <>
      <div>
        {" "}
        <Card key={letter?.id}>
          {" "}
          <CardHeader>
            <CardTitle className={`${dancing.className} text-4xl space-y-4`}>
              <p>Dear {letter?.recipient},</p>
              <p className="text-3xl text-current/80">
                My name is {letter?.sender}.
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent
            className={`${dancing.className} text-2xl text-current/60`}
          >
            {letter?.message}
            <TldrawImage snapshot={parsedData} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant={"default"}
              onClick={() => {
                router.push(`/cart/${letter?.id}/edit`);
              }}
            >
              Edit Letter
            </Button>
            <Button
              variant={"default"}
              onClick={() => router.push(`/cart/${letter?.id}`)}
            >
              View Letter
            </Button>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant={"neutral"}>Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your letter and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      handleRemove(letter?.id as string);
                      const promise = (): Promise<ResponseData> =>
                        new Promise((resolve) =>
                          setTimeout(() => resolve({ name: "Letter" }), 2000)
                        );

                      toast.promise(promise, {
                        loading: "Loading...",
                        success: (data) => {
                          return `The ${data.name} has been successfully deleted.`;
                        },
                        error: "Error",
                      });
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
