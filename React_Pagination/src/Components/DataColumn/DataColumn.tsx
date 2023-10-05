import "./DataColumn.scss";

import React from "react";

export type DataColumnProps<T> = {
  index: number;
  values: T[];
};

function DataColumn<T extends React.ReactNode>({ index, values }: DataColumnProps<T>) {
  return (
    <div key={index} className="column">
      <div className="dataCol">
        {values.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </div>
  );
}

export default DataColumn;
