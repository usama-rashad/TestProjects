import Form from "../Form/Form";

import React from "react";

interface IProps {
  master: any;
  inputCount: number;
}

function FormWithTitle(props: IProps) {
  return props.master;
}

export default FormWithTitle;
