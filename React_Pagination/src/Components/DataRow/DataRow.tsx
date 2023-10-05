import "./DataRow.scss";

import React from "react";

export type DataRowProps<T> = {
  index: number;
  values: T[];
};

function DataRow<T extends React.ReactNode>({ index, values }: DataRowProps<T>) {
  return (
    <div key={index} className="row">
      <div className="dataRow">
        {values.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </div>
  );
}

export default DataRow;
