import React, { ChangeEvent, useState } from "react";

function checkPositionState(progress: number): number {
  if (progress === 0) return 0;
  else if (progress === 100) return 2;
  else return 1;
}

function InfiniteScroll() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [progressPct, setProgressPct] = useState(45);
  const [positionState, setPositionState] = useState(0);

  const onScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
    setScrollHeight(document.documentElement.scrollHeight);
    setClientHeight(document.documentElement.clientHeight);
    setProgressPct(Math.round((scrollTop / (scrollHeight - clientHeight)) * 100.0));
    setPositionState(checkPositionState(progressPct));
  };

  React.useLayoutEffect(() => {
    document.addEventListener("scroll", onScroll);
    // Initial load
    setScrollTop(document.documentElement.scrollTop);
    setScrollHeight(document.documentElement.scrollHeight);
    setClientHeight(document.documentElement.clientHeight);
    setProgressPct(Math.round((scrollTop / (scrollHeight - clientHeight)) * 100.0));
    setPositionState(checkPositionState(progressPct));
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });
  return { scrollTop, scrollHeight, clientHeight, progressPct, positionState };
}

export default InfiniteScroll;
