import React, { useEffect, useState } from "react";
import "./Input.scss";

interface IInputs {
  textUpdate: (input: string) => void;
  placeholderText: string;
  isHidden?: boolean;
  isDisabled?: boolean;
}

function Input(props: IInputs) {
  const [inputType, setInputType] = useState("");
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    setInputType((current) => (props.isHidden ? "password" : ""));
  }, [props.isHidden]);

  const updateCurrentText = (input: string) => {
    props.textUpdate(input);
  };

  return (
    <div className="input">
      <input
        disabled={props.isDisabled}
        placeholder={props.placeholderText}
        type={inputType}
        onChange={(event) => {
          updateCurrentText(event.target.value);
        }}
      />
    </div>
  );
}

export default Input;
