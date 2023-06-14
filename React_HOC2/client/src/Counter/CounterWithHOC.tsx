import React, { ReactNode } from "react";
import withHOC from "../withHOC";
import Counter from "./Counter";

interface HOCProps {
  enable: boolean;
  baseComponent: JSX.Element;
}

function CounterWithHOC(props: HOCProps): JSX.Element {
  if (props.enable) {
    return props.baseComponent;
  } else {
    return <></>;
  }
}

export default CounterWithHOC;
