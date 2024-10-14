"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Tldraw,
  TldrawImage,
  Editor,
  StoreSnapshot,
  TLPageId,
  TLRecord,
  TLStoreSnapshot,
  Box,
  getSnapshot,
} from "tldraw";
import "tldraw/tldraw.css";
import { createCart, updateLetter } from "../cart.api";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export interface LetterWithletter {
  letter?: {
    id: string;
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

function CartForm({ letter }: LetterWithletter) {
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      sender: letter?.sender || "",
      recipient: letter?.recipient || "",
      message: letter?.message || "",
      drawingData: letter?.drawingData || "",
    },
  });
  const [contentType, setContentType] = useState<"message" | "drawing">(
    "message"
  );
  const [editor, setEditor] = useState<Editor>();
  const [snapshot, setSnapshot] = useState<StoreSnapshot<TLRecord>>(
    {} as TLStoreSnapshot
  );
  const [currentPageId, setCurrentPageId] = useState<TLPageId | undefined>();
  const [showBackground, setShowBackground] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewportPageBounds, setViewportPageBounds] = useState(
    new Box(0, 0, 600, 400)
  );
  const [isEditing, setIsEditing] = useState(true);

  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onSubmit = handleSubmit(async (data) => {
    if (contentType === "drawing") {
      data.message = "This is a drawing that I made for you: ";
    }
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

  const handleDrawingToggle = () => {
    if (isEditing) {
      if (!editor) return;
      setIsDarkMode(editor.user.getIsDarkMode());
      setShowBackground(editor.getInstanceState().exportBackground);
      setViewportPageBounds(editor.getViewportPageBounds());
      setCurrentPageId(editor.getCurrentPageId());
      setSnapshot(getSnapshot(editor.store).document);
      setIsEditing(false);
      const stringJsonSnapshot = JSON.stringify(
        getSnapshot(editor.store).document
      );
      setValue("drawingData", stringJsonSnapshot); // Use setValue from react-hook-form
    } else {
      setIsEditing(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="sender">Sender</Label>
        <Input {...register("sender")} id="sender" />
      </div>

      <div>
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

      <div>
        <Label>Content Type</Label>
        <div className="flex space-x-2">
          <Label className="flex  justify-center items-center gap-2">
            <Input
              type="radio"
              className="w-5 h-5"
              value="message"
              checked={contentType === "message"}
              onChange={() => setContentType("message")}
            />
            <span>Write a message</span>
          </Label>
          <Label className="flex  justify-center items-center gap-2">
            <Input
              type="radio"
              className="w-5 h-5"
              value="drawing"
              checked={contentType === "drawing"}
              onChange={() => setContentType("drawing")}
            />
            <span>Create a drawing</span>
          </Label>
        </div>
      </div>

      {contentType === "message" ? (
        <div className="flex flex-col space-y-4">
          <Label htmlFor="content">Message</Label>
          <Textarea {...register("message")} id="content" rows={4}></Textarea>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <Button type="button" onClick={handleDrawingToggle}>
              {isEditing ? "✓ Save drawing" : "✎ Edit drawing"}
            </Button>
          </div>
          <div className="h-[25rem] w-[21rem]  ">
            {isEditing ? (
              <Tldraw
                snapshot={snapshot}
                onMount={(editor: Editor) => {
                  setEditor(editor);
                  editor.user.updateUserPreferences({
                    colorScheme: isDarkMode ? "dark" : "light",
                  });
                  if (currentPageId) {
                    editor.setCurrentPage(currentPageId);
                  }
                  if (viewportPageBounds) {
                    editor.zoomToBounds(viewportPageBounds, { inset: 0 });
                  }
                }}
              />
            ) : (
              <TldrawImage
                snapshot={snapshot}
                pageId={currentPageId}
                background={showBackground}
                darkMode={isDarkMode}
                bounds={viewportPageBounds}
                padding={0}
                scale={1}
              />
            )}
          </div>
        </div>
      )}

      <Button type="submit">Send Letter</Button>
    </form>
  );
}

export default CartForm;
