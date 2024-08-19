"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function EmployeeDetail() {
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

  if (!specificEmployee) {
    return <div>Employee not found!</div>;
  }

  return (
    <div>
      <Link href={""}>Employee Detail</Link>
      <br />
      <Link href={`/employee/${params.employeeDetail}/project`}>Projects</Link>
      <h1>Employee Detail</h1>
      <p>Id : {specificEmployee.Id}</p>
      <p>Name: {specificEmployee.Name}</p>
      <p>Age: {specificEmployee.Age}</p>
    </div>
  );
}
