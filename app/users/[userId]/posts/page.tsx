import React from "react";

export default function page(props: any) {
  console.log("props", props);
  const { params } = props;
  return <div>Danh sách của bài viết có userID : {params.userId}</div>;
}
