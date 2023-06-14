import React from "react";
import { Provider, useSelector } from "react-redux";
import { applySettings } from "./FilterReducer";
import { RootState, filterStore, useFilterDispatch } from "./FilterStore";
import "./Filter.scss";
import StringType from "../FilterTypes/StringType/StringType";
import MultipleType from "../FilterTypes/MultipleType/MultipleType";
import SingleOption from "../FilterTypes/SingleOption/SingleOption";
import MenuType from "../FilterTypes/MenuType/MenuType";

export interface IFilterParameter {
  parameterName: string;
  options?: string[];
  type: "string" | "multiple" | "option" | "menu";
}

export interface IFilterSettings {
  settings: IFilterParameter[];
}

function Filter(props: IFilterSettings) {
  const filterDispatch = useFilterDispatch();
  const filterData = useSelector((state: RootState) => state.filterReducer);

  // Dispatch root reducer function to send axios request
  const sendSettings = () => {
    // Need to make a higher order component to add a provider
    filterDispatch(applySettings(filterData));
  };

  return (
    <div className="mainFilter">
      <div className="filterSettings">
        {props.settings.map((parameter, index) => {
          switch (parameter.type) {
            case "string":
              return <StringType key={index} name={parameter.parameterName} />;
              break;
            case "multiple":
              return <MultipleType key={index} name={parameter.parameterName} options={parameter.options as string[]} />;
              break;
            case "option":
              return (
                <SingleOption key={index} name={parameter.parameterName} value={`option${index}`} options={parameter.options as string[]} />
              );
              break;
            case "menu":
              return (
                <MenuType key={index} name={parameter.parameterName} value={`option${index}`} options={parameter.options as string[]} />
              );
              break;
          }
        })}
      </div>
      <button className="applyButton" onClick={sendSettings}>
        Apply
      </button>
    </div>
  );
}

export default Filter;
