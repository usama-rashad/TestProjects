import DataRow, { DataRowProps } from "../DataRow/DataRow";
import "./Paginate.scss";

import React from "react";

export type PaginateProps<T> = {
  dataSource: T[][];
  renderRow: ({ values }: DataRowProps<T>) => React.ReactNode;
};

function Paginate<T>({ dataSource, renderRow }: PaginateProps<T>) {
  return (
    <div className="paginate">
      {dataSource.map((dataRow, index) => {
        return renderRow({ index: index, values: dataRow });
      })}
    </div>
  );
}

export default Paginate;
