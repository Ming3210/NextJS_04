import React from "react";

export default function UserId(props: any) {
  console.log("props", props);
  const { params } = props;
  return <div>User Id : {params.userId}</div>;
}
