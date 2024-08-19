"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [employee, setEmployee] = useState<any>([
    {
      Id: 1,
      Name: "David",
      Age: 20,
      project: ["Facebook", "Lazada"],
    },
    {
      Id: 2,
      Name: "Linda",
      Age: 21,
      project: ["Facebook", "Shopee"],
    },
    {
      Id: 3,
      Name: "Kelvin",
      Age: 18,
      project: ["Tinder", "Lazada"],
    },
  ]);

  return (
    <div>
      <h1>Employee List</h1>

      {employee.map((employee: any) => (
        <div key={employee.Id}>
          <p>Name: {employee.Name}</p>
          <p>Age: {employee.Age}</p>
          <p>Projects: {employee.project.join(", ")}</p>
          <Link href={`/employee/${employee.Id}`}>
            <button>Employee Detail</button>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
