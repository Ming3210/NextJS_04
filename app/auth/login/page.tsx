"use client";
import { useRouter } from "next/router";
import React from "react";

export default function page() {
  const isCheckLogin = true;
  const router = useRouter();
  const login = () => {
    if (isCheckLogin) {
      router.push("/home");
    }
  };
  return (
    <div>
      Login time
      <button onClick={login}>Login</button>
    </div>
  );
}
