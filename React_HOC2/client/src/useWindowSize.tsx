import React from "react";

function useWindowSize() {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const updateDimensions = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    console.log("Update triggered.");
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  return { width, height };
}

export default useWindowSize;
