"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function HelloUser() {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    return <span> {user.firstName}!!</span>;
  }

  return <span> Visitor!! </span>;
}

export default HelloUser;
