import "./DataRow.scss";

import React, { useEffect, useState } from "react";

export interface IDataChangePar {
  serialNumber: number;
  aisle: string;
}

interface IDataRow {
  index: number;
  source: IDataChangePar;
  initialValue: IDataChangePar;
  onDataChange: (e: IDataChangePar) => void;
}

function DataRow(props: IDataRow) {
  const [data, setData] = useState({ serialNumber: 0, aisle: "" });

  const updateSerialNumber = (e: number) => {
    props.onDataChange({ serialNumber: e, aisle: data.aisle });
    setData({ ...data, serialNumber: e });
  };
  const updateAisleReference = (e: string) => {
    props.onDataChange({ serialNumber: data.serialNumber, aisle: e });
    setData({ ...data, aisle: e });
  };

  useEffect(() => {
    setData(props.initialValue);
  }, []);

  return (
    <div className="mainDataRow">
      <p>{props.index + 1}.</p>
      <input
        value={props.source.serialNumber}
        onChange={(e) => {
          updateSerialNumber(parseInt(e.target.value));
        }}
      />
      <input
        value={props.source.aisle}
        onChange={(e) => {
          updateAisleReference(e.target.value);
        }}
      />
    </div>
  );
}

export default DataRow;
