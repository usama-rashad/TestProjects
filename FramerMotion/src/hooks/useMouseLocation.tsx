import { useEffect, useState } from "react";

function useMouseLocation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", mouseEventListener);
    return () => {
      document.removeEventListener("mousemove", mouseEventListener);
    };
  }, []);

  const mouseEventListener = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return position;
}

export default useMouseLocation;
