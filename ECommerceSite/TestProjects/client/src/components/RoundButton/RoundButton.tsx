import { UploadIcon } from "../FileUploadManager/FileUploadManagerIcons";
import "./RoundButton.scss";

import React from "react";

interface IRoundButtonProps {
  onClick: () => void;
}

function RoundButton(props: IRoundButtonProps) {
  return (
    <div className="mainRoundButton" onClick={props.onClick}>
      <UploadIcon />
    </div>
  );
}

export default RoundButton;
