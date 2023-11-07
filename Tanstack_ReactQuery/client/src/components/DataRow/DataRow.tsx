import "./DataRow.scss";

import React from "react";
import { User } from "./../../App";

export type DataRowProps<T> = {
  index: number;
  data: T;
  rowHash?: string;
};

function DataRow<T extends object>({ index, data, rowHash }: DataRowProps<T>) {
  console.log(data || "NA");
  return (
    <div className={`dataRow ${rowHash}`}>
      {Object.values(data || { default: "NA" }).map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
}

export default DataRow;
