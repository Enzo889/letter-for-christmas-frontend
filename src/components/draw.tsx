"use client";
import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

function DrawTL() {
  return (
    <div>
      <div className="inset-0 mt-52 mx-auto border border-solid border-red-600 fixed w-full h-2/4">
        <Tldraw persistenceKey="s" />
      </div>
    </div>
  );
}

export default DrawTL;
