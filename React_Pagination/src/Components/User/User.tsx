import "./User.scss";

import React from "react";
import { TUser } from "./../../Hooks/usePeopleData/usePeopleData";

function User(props: TUser) {
  return (
    <div className="mainUser">
      <img className="thumbnail" src={props.thumbnail} alt={props.thumbnail} />
      <div className="info">
        <p className="bold">
          {props.title}. {props.firstname} {props.lastname}
        </p>
        <p className="light">{props.email}</p>
        <p className="light">
          {props.city},{props.country}
        </p>
      </div>
    </div>
  );
}

export default User;
