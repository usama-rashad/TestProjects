import Div from "../Div/Div";
import "./MultiDiv.scss";
import React, { ReactNode, memo, useCallback, useMemo } from "react";

interface IMultiDiv {
  divCount: number;
  scrollToDiv: number;
  scrollCommand: boolean;
}

function MultiDiv(props: IMultiDiv) {
  let divs = Array.from({ length: props.divCount - 1 }, (_, index) => {
    return <Div key={index} index={index + 1} />;
  });

  React.useEffect(() => {
    if (props.scrollCommand) {
      console.log(`Div ${props.scrollToDiv} triggered...`);
      document.getElementsByClassName(`mainDiv ${props.scrollToDiv}`)[0].scrollIntoView();
    }
  }, [props.scrollCommand]);

  return <div className="mainMultiDiv">{divs}</div>;
}

export default memo(MultiDiv);
