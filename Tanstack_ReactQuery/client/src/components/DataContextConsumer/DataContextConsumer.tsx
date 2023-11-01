import { DataContextProvider, DataContext, TDataContext } from "../../contexts/DataContext";
import "./DataContextConsumer.scss";
import React, { useContext, useEffect, useState } from "react";

function DataContextConsumer() {
  const dataContext = useContext<TDataContext>(DataContext);
  return (
    <div className="dataContextConsumer">
      <div className="topBlank"></div>
      <h3>Data Context Consumer</h3>
      <div className="data">
        {dataContext.data?.map((value, index) => {
          return <p key={index}>{value.name}</p>;
        })}
      </div>
    </div>
  );
}

export default DataContextConsumer;
