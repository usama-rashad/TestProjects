import { render } from "react-dom";
import React from "react";

type MessageButtonProps = {
  name: string;
  //   children: React.ReactNode;
};

class MessageButton extends React.Component<MessageButtonProps> {
  buttonName: string;
  constructor(props: MessageButtonProps) {
    super(props);
    this.buttonName = props.name;
  }

  buttonPressed = () => {
    alert(`${this.buttonName} pressed.`);
  };

  render() {
    return <button onClick={this.buttonPressed}>{this.buttonName}</button>;
  }
}

export default MessageButton;
