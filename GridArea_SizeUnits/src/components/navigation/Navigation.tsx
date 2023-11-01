import "./Navigation.scss";

import React from "react";

import { HomeIcon, DashboardIcon, SettingsIcon, AboutIcon } from "./../../assets/Icons";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navTitle">
        <p>Navigation</p>
      </div>
      <div className="navLinks">
        <div className="link">
          <p>Home</p>
          <div className="icon">
            <HomeIcon />
          </div>
        </div>
        <div className="link">
          <p>Dashboard</p>
          <div className="icon">
            <DashboardIcon />
          </div>
        </div>
        <div className="link">
          <p>Settings</p>
          <div className="icon">
            <SettingsIcon />
          </div>
        </div>
        <div className="link">
          <p>About</p>
          <div className="icon">
            <AboutIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
