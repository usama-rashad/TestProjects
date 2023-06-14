import React from "react";
import "./App.scss";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import PixelMap from "./components/PixelMap/PixelMap";

function App() {
  const { scrollTop, clientHeight, scrollHeight, progressPct, positionState } = InfiniteScroll();
  return (
    <div className="mainApp">
      <div className="infoBar">
        <div
          className="progressBar"
          style={{ width: `${progressPct}%`, backgroundColor: `hsla(${(progressPct / 100.0) * 360.0},100%,50%,1.0)` }}
        ></div>
        <div className="data">
          <p>Scroll top {scrollTop}</p>
          <p>Scroll height {scrollHeight}</p>
          <p>Client height {clientHeight}</p>
          <p>Progress {progressPct}%</p>
        </div>
        <div className="indicators">
          {positionState === 0 ? (
            <div className="topOfPage">
              <p>Top</p>
            </div>
          ) : null}
          {positionState === 2 ? (
            <div className="bottomOfPage">
              <p>Bottom</p>
            </div>
          ) : null}
        </div>
      </div>
      <PixelMap verticalCount={10} horizontalCount={10} />
    </div>
  );
}

export default App;
