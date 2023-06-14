import React from "react";

interface IMousePosition {
  x: number;
  y: number;
}

interface IMousePositionProps {
  id: string;
}

function useMousePosition(props: IMousePositionProps) {
  const [mousePosition, setMousePosition] = React.useState<IMousePosition | null>(null);

  const updateMousePosition = (e: MouseEvent) => {
    console.log(e);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  React.useLayoutEffect(() => {
    document.addEventListener("mouseover", updateMousePosition);
    return () => {
      document.removeEventListener("mouseover", updateMousePosition);
    };
  });

  return { mousePosition };
}

export default useMousePosition;
