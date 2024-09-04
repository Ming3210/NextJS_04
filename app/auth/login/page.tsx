"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
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
