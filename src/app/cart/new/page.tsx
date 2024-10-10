import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import CartForm from "./cart-form";

export default function NewCart() {
  return (
    <div className="h-screen flex justify-center items-center">
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>New cart</CardTitle>
        </CardHeader>
        <CardContent>
          <CartForm />
        </CardContent>
      </Card>
    </div>
  );
}
