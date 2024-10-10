"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createCart } from "../cart.api";
import React from "react";
import { useRouter } from "next/navigation";

function CartForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await createCart({
      ...data,
    });
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
        <Button> Create cart </Button>
      </form>
    </div>
  );
}

export default CartForm;
