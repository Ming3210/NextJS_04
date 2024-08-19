"use client";
import React from "react";
interface IdProduct {
  idProduct: string;
}
interface Props {
  params: IdProduct;
}
export default function comapnyName(props: any) {
  console.log("props", props);
  const { params } = props;
  return <div>Company Name : {params.companyName}</div>;
}
