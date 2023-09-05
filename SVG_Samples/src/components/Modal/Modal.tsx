import "./Modal.scss";

import React from "react";

interface IModalProps {
  open: Boolean;
  close: () => void;
  children: React.ReactNode;
}

function Modal(props: IModalProps) {
  const closeModal = () => {
    props.close();
  };
  return (
    <div className={`mainModal ${props.open ? "open" : "close"}`}>
      <div className="closeButton" onClick={closeModal}>
        <p className="closeText">x</p>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Modal;
