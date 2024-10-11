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
    <div className="h-screen flex justify-center items-center">
      {" "}
      <Card>
        <CardHeader>
          <CardTitle> {params.id ? "Edit Cart" : "New Cart"}</CardTitle>
        </CardHeader>
        <CardContent>
          <CartForm letter={letter} />
        </CardContent>
      </Card>
    </div>
  );
}

export default NewCart;
