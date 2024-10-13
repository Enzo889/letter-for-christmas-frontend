"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { createCart, updateLetter } from "../cart.api";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Letter {
  letter?: {
    id?: string;
    sender?: string;
    recipient?: string;
    message?: string;
    drawingData?: string;
  };
}

const christmasCharacters = [
  "Santa Claus",
  "Mrs. Claus",
  "Rudolph",
  "Frosty the Snowman",
  "Elf on the Shelf",
  "Jack Frost",
  "The Grinch",
  "Krampus",
];

function CartForm({ letter }: Letter) {
  console.log(letter);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      sender: letter?.sender || "",
      recipient: letter?.recipient || "",
      message: letter?.message || "",
      drawingData: letter?.drawingData || "",
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
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient</Label>
          <Controller
            name="recipient"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Christmas character" />
                </SelectTrigger>
                <SelectContent>
                  {christmasCharacters.map((character) => (
                    <SelectItem key={character} value={character}>
                      {character}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <Label>Message</Label>
        <Input {...register("message")} />
        <Label>Draw</Label>
        <Input {...register("drawingData")} />
        <Button className="mt-4" variant={"neutral"}>
          {" "}
          {params.id ? "Update Letter" : "Create Letter"}
        </Button>
      </form>
    </div>
  );
}

export default CartForm;
