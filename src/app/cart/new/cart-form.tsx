"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createCart, updateLetter } from "../cart.api";
import React from "react";
import { useParams, useRouter } from "next/navigation";

interface Letter {
  letter?: {
    sender: string;
    recipient: string;
    message: string;
    drawingData: string;
  };
}
function CartForm({ letter }: Letter) {
  console.log(letter);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      sender: letter?.sender,
      recipient: letter?.recipient,
      message: letter?.message,
      drawingData: letter?.drawingData,
    },
  });
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateLetter(params.id, {
        ...data,
      });
    } else {
      await createCart({
        ...data,
      });
    }
    router.push("/");
    router.refresh();
  });
  return (
    <div>
      {" "}
      <form onSubmit={onSubmit}>
        <Label>Sender</Label>
        <Input {...register("sender")} />
        <Label>Recipient</Label>
        <Input {...register("recipient")} />
        <Label>Message</Label>
        <Input {...register("message")} />
        <Label>Draw</Label>
        <Input {...register("drawingData")} />
        <Button> {params.id ? "Update Letter" : "Create Letter"}</Button>
      </form>
    </div>
  );
}

export default CartForm;
