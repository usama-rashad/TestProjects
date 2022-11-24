import "./Navbar.scss";

import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Oz Portal</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Usama</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
