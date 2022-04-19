import React from "react";
import Greet from "../01-Greet";

function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  return <div>{props.name}</div>;
}

export default CustomComponent;
