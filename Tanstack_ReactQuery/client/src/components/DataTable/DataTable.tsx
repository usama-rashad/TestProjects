import { DataRowProps } from "../DataRow/DataRow";
import "./DataTable.scss";

import React from "react";

interface DataTable<T> {
  scrollToEnd: boolean;
  data: T[];
  RowTemplate: (props: DataRowProps<T>) => JSX.Element;
}

function DataTable<T extends {}>({ RowTemplate, scrollToEnd, data }: DataTable<T>) {
  return (
    <div id="dataTable">
      {data.map((rowData, index) => {
        return <RowTemplate key={index} index={index} data={rowData} />;
      })}
    </div>
  );
}

export default DataTable;
