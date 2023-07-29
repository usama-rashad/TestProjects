import "./CookieItem.scss";

import React from "react";

export interface ICookieItem {
  name: string;
  value: string;
}

function CookieItem(props: ICookieItem) {
  return (
    <div className="mainCookieItem">
      <p>{props.name}</p>
      <p>{props.value}</p>
    </div>
  );
}

export default CookieItem;
