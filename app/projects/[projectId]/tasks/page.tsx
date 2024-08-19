import React from "react";

export default function page(props: any) {
  console.log("props", props);
  const { params } = props;
  return <div>Danh sách nhiệm vụ của dự án có Id : {params.projectId}</div>;
}
