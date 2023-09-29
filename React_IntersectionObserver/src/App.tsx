import "./App.scss";

import React, { useEffect, useRef } from "react";

function App() {
  const boxRef = useRef<HTMLDivElement>(null);
  let prevRatio = 0.0;
  let increasingColor = "rgba(00, 40, 190, ratio)";
  let decreasingColor = "rgba(190, 10, 40, ratio)";

  function handleIntersect(entries: { intersectionRatio: number; target: HTMLElement }[], observer: any) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio.toString());
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio.toString());
      }
      prevRatio = entry.intersectionRatio;
    });
  }

  function createObserver() {
    let observer;
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };
    observer = new IntersectionObserver(handleIntersect, options);
    if (boxRef.current) observer.observe(boxRef.current);
  }

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 40;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  useEffect(() => {
    createObserver();
  }, []);
  return (
    <div className="mainApp">
      <div ref={boxRef} className="box">
        <p>Box</p>
      </div>
    </div>
  );
}

export default App;
