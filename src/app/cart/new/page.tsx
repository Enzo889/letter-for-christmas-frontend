import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import CartForm from "./cart-form";
import { getLetter } from "../cart.api";

interface Props {
  params: {
    id: string;
  };
}

async function NewCart({ params }: Props) {
  const letter = await getLetter(params.id);
  return (
    <div className="h-full flex justify-center items-center m-4">
      {" "}
      <Card>
        <CardHeader>
          <CardTitle> {params.id ? "Edit Letter" : "New Letter"}</CardTitle>
        </CardHeader>
        <CardContent>
          <CartForm letter={letter} />
        </CardContent>
      </Card>
    </div>
  );
}

export default NewCart;
