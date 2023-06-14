import React from "react";
import "./SingleOption.scss";
import { useFilterDispatch } from "../../Filter/FilterStore";
import { updateSingleOption } from "../../Filter/FilterReducer";

interface ISingleOption {
  name: string;
  value: string;
  options: string[];
}

function SingleOption(props: ISingleOption) {
  const [data, setData] = React.useState("");
  // Dispatch
  const filterDispatch = useFilterDispatch();

  //Update initially
  React.useEffect(() => {
    filterDispatch(updateSingleOption({ parameterName: props.name, type: "option", options: [props.options[0]] }));
  }, []);

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    filterDispatch(updateSingleOption({ parameterName: props.name, type: "option", options: [value] }));
  };

  return (
    <div className="mainSingleOption">
      <p className="optionTitle">{props.name}</p>
      {props.options.map((option, index) => {
        return (
          <div key={index} className="option">
            <input
              type="radio"
              name={props.name}
              value={option}
              defaultChecked={index == 0} // <-- The value at index 0 will be initially pushed to the state
              onChange={(e) => {
                updateData(e);
              }}
            />
            <p>{option}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SingleOption;
