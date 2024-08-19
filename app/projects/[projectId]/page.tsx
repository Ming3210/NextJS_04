import React from "react";

export default function page(props: any) {
  console.log("props", props);
  const { params } = props;
  return <div>Trang chi tiết có dự án Id : {params.projectId}</div>;
}
