import React from "react";
import "./MultipleType.scss";
import { useFilterDispatch } from "../../Filter/FilterStore";
import { updateMultipleOption } from "../../Filter/FilterReducer";

interface IMultipleType {
  name: string;
  options: string[];
}

interface IMultipleTypeStatus {
  value: string;
  status: boolean;
}

function MultipleType(props: IMultipleType) {
  const [status, setStatus] = React.useState<IMultipleTypeStatus[]>([]);
  // Dispatch
  const filterDispatch = useFilterDispatch();

  // Initial update on component mount
  React.useEffect(() => {
    let init = props.options.map((option) => {
      return { value: option, status: false };
    });
    setStatus([...status, ...init]);
  }, []);

  const updatekeys = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    // Update the list of keys
    let id = e.currentTarget.id;
    let isChecked = e.currentTarget.checked;

    // Update change in status array
    let update = status.map((option) => {
      if (option.value === id) {
        return { value: option.value, status: isChecked };
      } else {
        return { value: option.value, status: option.status };
      }
    });
    setStatus([...update]);
    // Make a final array
    let final = update.map((option) => {
      if (option.status === true) {
        return option.value;
      } else {
        return "";
      }
    });

    filterDispatch(updateMultipleOption({ parameterName: props.name, type: "multiple", options: final }));
  };

  return (
    <div className="mainMultipleType">
      <p className="optionTitle">{props.name}</p>
      {props.options.map((option, index) => {
        return (
          <div key={index} className="option">
            <input
              type="checkbox"
              id={option}
              onClick={(e) => {
                updatekeys(e);
              }}
            />
            <p>{option}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MultipleType;
