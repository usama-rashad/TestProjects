import "./DataRow.scss";

import { IRawData } from "../../rawData";

import React from "react";

interface IDataRow {
  data: IRawData;
}

function DataRow(props: IDataRow) {
  return (
    <div className="mainDataRow">
      <p>{props.data.id}</p>
      <p>{props.data.first_name}</p>
      <p>{props.data.last_name}</p>
      <p>{props.data.ip_address}</p>
    </div>
  );
}

export default DataRow;
