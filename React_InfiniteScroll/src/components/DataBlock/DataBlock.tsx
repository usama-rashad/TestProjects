import "./DataBlock.scss";

import React, { useEffect, useRef } from "react";

import { IRawData } from "../../data";

interface IDataBlockProps {
  index: number;
  data: IRawData;
}

function DataBlock(props: IDataBlockProps) {
  const mainRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let randomnHue = Math.random() * 360.0;
    mainRef.current?.style.setProperty("&:hover backgroundColor", `hsla(${randomnHue},100%,50%,100%)`);
  }, []);
  return (
    <div ref={mainRef} className="mainDataBlock">
      <p className="id">{props.index + 1}</p>
      <p>{props.data.first_name}</p>
      <p>{props.data.last_name}</p>
      <p>{props.data.ip_address}</p>
    </div>
  );
}

export default DataBlock;
