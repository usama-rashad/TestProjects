import "./ProgressBar.scss";

import React, { useEffect, useRef } from "react";

function ProgressBar({ progress }) {
  const barRef = useRef<HTMLDivElement>();
  // Update progress
  useEffect(() => {
    barRef.current.style.setProperty("width", `${progress}px`);
  }, [progress]);

  return (
    <div className="mainProgressBar">
      <p className="progress">{progress}%</p>
      <div ref={barRef} id="bar"></div>
    </div>
  );
}

export default ProgressBar;
