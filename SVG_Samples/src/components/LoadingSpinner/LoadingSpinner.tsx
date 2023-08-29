import "./LoadingSpinner.scss";

import React from "react";

function LoadingSpinner() {
  return (
    <div className="mainLoader">
      <div className="wheel">
        <svg viewBox="0 0 60 60" width={180} height={180}>
          <path
            id="rect1"
            fill="white"
            stroke="black"
            strokeWidth={1}
            d="M 0.27148437,0.27148437 V 13.728516 h 0.0117188 A 3.7367754,3.7367756 0 0 0 0.26367187,14 3.7367754,3.7367756 0 0 0 4,17.736328 3.7367754,3.7367756 0 0 0 7.7363281,14 3.7367754,3.7367756 0 0 0 7.7265625,13.728516 h 0.00195 V 0.27148437 Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoadingSpinner;
