import React from "react";
import "./HoverButton.scss";

interface IHoverButton {
  children?: React.ReactNode;
}

interface IMousePosition {
  x: number;
  y: number;
}

function HoverButton(props: IHoverButton) {
  const ripple1Ref = React.useRef<HTMLDivElement>(null);
  const ripple2Ref = React.useRef<HTMLDivElement>(null);

  const [rippleState, setRippleState] = React.useState(false);
  const [clickPosition, setClickPosition] = React.useState<IMousePosition | null>(null);

  // Functions
  const updateMouseClick = (e: MouseEvent) => {
    const btn = document.querySelector(".mainHoverButton") as HTMLElement;
    const x = e.pageX - btn.offsetLeft - 10;
    const y = e.pageY - btn.offsetTop - 10;
    // Set ripple center positions
    ripple1Ref.current?.style.setProperty("--x", x + "px");
    ripple1Ref.current?.style.setProperty("--y", y + "px");
    ripple2Ref.current?.style.setProperty("--x", x + "px");
    ripple2Ref.current?.style.setProperty("--y", y + "px");
    setClickPosition({ x: x, y: y });
    setRippleState(true);
    setTimeout(() => {
      setRippleState(false);
    }, 500);
  };

  // Effects
  React.useEffect(() => {
    const btn = document.querySelector(".mainHoverButton") as HTMLElement;
    btn.addEventListener("mousedown", updateMouseClick);
    return () => {
      btn.removeEventListener("mousedown", updateMouseClick);
    };
  });

  // Render
  return (
    <div className="mainHoverButton">
      <div ref={ripple1Ref} className={`ripple ${rippleState ? "on1" : ""}`}></div>
      <div ref={ripple2Ref} className={`ripple ${rippleState ? "on2" : ""}`}></div>
      <p>{props.children}</p>
    </div>
  );
}

export default HoverButton;
