"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomePage() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      This is home page
      <br />
      <Link
        className={pathName == "/home" ? "active" : "unactive"}
        href={"/home"}
      >
        Home
      </Link>
      <Link
        className={pathName == "/contact" ? "active" : "unactive"}
        href={"/contact"}
      >
        Contact
      </Link>
      <Link
        className={pathName == "/about" ? "active" : "unactive"}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={pathName == "/login" ? "active" : "unactive"}
        href={"/login"}
      >
        Login
      </Link>
    </div>
  );
}
