import React from "react";

export default function withHOC(flag: boolean, component: React.JSX.Element): React.JSX.Element {
  function WithHOC() {
    if (flag) {
      return component;
    } else {
      return <></>;
    }
  }
  return WithHOC();
}
