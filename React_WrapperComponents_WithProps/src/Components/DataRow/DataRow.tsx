import "./DataRow.scss";

import React from "react";

interface DataRowProps<T> {
  data: T;
}

function DataRow<T extends {}>(props: DataRowProps<T>) {
  return (
    <div className="mainDataRow">
      {Object.values<string>(props.data).map((item, index) => {
        return (
          <div key={index} className="item">
            {item.toString()}
          </div>
        );
      })}
    </div>
  );
}

export default DataRow;
