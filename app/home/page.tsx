"use client";
import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Home() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      Trang chủ! <br />
      {/* <Link
        className={pathName == "/home/news" ? "active" : ""}
        href={"/home/news"}
      >
        News
      </Link>
      <Link
        className={pathName == "/home/contact" ? "active" : ""}
        href={"/home/contact"}
      >
        Contact
      </Link> */}
    </div>
  );
}
