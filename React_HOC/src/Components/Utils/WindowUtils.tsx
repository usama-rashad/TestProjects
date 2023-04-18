import React, { useEffect, useState } from "react";

interface IWindowSize {
  width: number;
  height: number;
}

function WindowUtils() {
  const [size, setSize] = useState<IWindowSize>({ width: 0, height: 0 });

  const resizeWindowListener = () => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener("resize", resizeWindowListener);
    return () => {
      window.removeEventListener("resize", resizeWindowListener);
    };
  }, []);

  return <div className="mainWindow">{`Width : ${size.width},Height : ${size.height}`}</div>;
}

export default WindowUtils;
