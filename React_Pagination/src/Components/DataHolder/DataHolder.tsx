import Paginate from "../Paginate/Paginate";
import "./DataHolder.scss";

import React from "react";

import { rawData } from "./../../rawData";
import DataRow from "../DataRow/DataRow";

function DataHolder() {
  return (
    <div className="mainDataHolder">
      <h1>React Pagination Example</h1>
      {/* <Paginate dataList={rawData} itemsPerPage={10} RowTemplate={<DataRow />} /> */}
    </div>
  );
}

export default DataHolder;
