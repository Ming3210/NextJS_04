"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [employee, setEmployee] = useState([
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

  const params = useParams();
  const employeeId = Number(params.employeeDetail);

  const specificEmployee = employee.find((emp) => emp.Id === employeeId);

  return (
    <div>
      <Link href={`/employee/${params.employeeDetail}/`}>Employee Detail</Link>
      <h1>Employee ID:{params.empoyeeDetail}</h1>

      <p>Projects: {specificEmployee?.project.join(", ")}</p>
    </div>
  );
}
