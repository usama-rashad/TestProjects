import React from "react";
import "./StringType.scss";
import { useFilterDispatch } from "../../Filter/FilterStore";
import { updateStringOption } from "../../Filter/FilterReducer";

interface IStringType {
  name: string;
}

function StringType(props: IStringType) {
  const [data, setData] = React.useState<IStringType>({ name: "" });
  // Dispatch
  const filterDispatch = useFilterDispatch();

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
    filterDispatch(updateStringOption({ parameterName: props.name, type: "string", options: [e.target.value] }));
  };

  return (
    <div className="mainStringType">
      <p className="optionTitle">{props.name}</p>
      <input placeholder={`Enter ${props.name}...`} onChange={(e) => updateData(e)} />
    </div>
  );
}

export default StringType;
