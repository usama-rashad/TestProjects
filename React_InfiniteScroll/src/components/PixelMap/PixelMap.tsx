import React from "react";
import "./PixelMap.scss";
import Pixel from "../Pixel/Pixel";

interface IPixelMap {
  verticalCount: number;
  horizontalCount: number;
}

function PixelMap(props: IPixelMap) {
  let pixelArray = new Array<number>();

  React.useEffect(() => {
    for (let i = 0; i < props.horizontalCount; i++) {
      for (let j = 0; j < props.verticalCount; j++) {
        pixelArray.push(0);
      }
    }
  }, []);

  return (
    <div className="mainPixelMap">
      <Pixel />
    </div>
  );
}

export default PixelMap;
