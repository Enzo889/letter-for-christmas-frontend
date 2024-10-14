"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TldrawImage } from "tldraw";
import { dancing } from "@/components/letter-card";
import { LetterWithletter } from "../new/cart-form";

function LetterDetailPage({ letter }: LetterWithletter) {
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

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle
            className={` ${dancing.className} text-4xl space-y-4 text-start`}
          >
            <p>Dear {letter?.recipient},</p>
            <p className="text-3xl text-current/80">
              My name is {letter?.sender}.
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent
          className={`${dancing.className} text-2xl text-current/60 text-start`}
        >
          {letter?.message}
          <TldrawImage snapshot={parsedData} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href={`/collage`}
            className={buttonVariants({ variant: "neutral" })}
          >
            Go Back
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LetterDetailPage;
