import { useEffect, useState } from "react";
import "./Segment.scss";
import Pixel from "../Pixel/Pixel";
import { SegmentHelper } from "../../SegmentHelper";

interface ISegment {
  className: string;
  columns: number;
  rows: number;
  value: number;
}

function Segment(props: ISegment) {
  const [pixels, setPixels] = useState<boolean[][]>([]);
  // let pixels: boolean[][] = Array.from({ length: props.rows }, (_) => Array.from({ length: props.columns }, (_) => false));

  useEffect(() => {
    let segHelper = new SegmentHelper(8);
    let binaryValue = segHelper.convertBCD(props.value);

    setPixels(binaryValue);
  }, [props.value]);

  return (
    <div className="mainSegment">
      {pixels.map((column, index1) => (
        <>
          <div key={index1} className="col">
            <>
              {column.map((pixel, index2) => {
                return <Pixel key={index2} on={pixel} />;
              })}
            </>
          </div>
        </>
      ))}
    </div>
  );
}

export default Segment;
