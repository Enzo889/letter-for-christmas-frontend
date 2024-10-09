import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function NewCart() {
  return (
    <div className="h-screen flex justify-center items-center">
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>New cart</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <Label>Sender</Label>
            <Input />
            <Label>Recipient</Label>
            <Input />
            <Label>Message</Label>
            <Input />
            <Label>Draw</Label>
            <Input />
            <Button> Create cart </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
