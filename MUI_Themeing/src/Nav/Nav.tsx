import "./Nav.scss";

import React from "react";

export interface IState {
  state: string;
}

function Nav(props: IState) {
  return (
    <div className={props.state}>
      <div className="indicator">
        <div className="line"></div>
        <div className="stops">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
