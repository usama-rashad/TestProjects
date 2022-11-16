import React from "react";

interface IProps {
  name: string;
}

function Child(props: IProps) {
  return <div>{props.name}</div>;
}

export default Child;
