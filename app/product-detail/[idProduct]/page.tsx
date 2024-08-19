"use client";
import React from "react";
interface IdProduct {
  idProduct: string;
}
interface Props {
  params: IdProduct;
}
export default function ProductDetail(props: any) {
  console.log("props", props);
  const { params } = props;
  return <div>Product Id : {params.idProduct}</div>;
}
