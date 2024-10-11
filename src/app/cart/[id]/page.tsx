import React from "react";
import { getLetter } from "../cart.api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  params: {
    id: string;
  };
}
async function LetterDetailPage({ params }: Props) {
  const letter = await getLetter(params.id);
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {letter.sender} to {letter.recipient}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {letter.message}.<iframe src={letter.drawingData}></iframe>
        </CardContent>
        <CardFooter>
          <Link href={`/`} className={buttonVariants()}>
            Go Back
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LetterDetailPage;
