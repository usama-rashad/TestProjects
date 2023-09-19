import "./RippleEffect.scss";

import React, { useEffect, useRef, useState } from "react";

interface IRippleEffect {
  position: { x: number; y: number };
}

function RippleEffect(props: IRippleEffect) {
  const mainRippleRef = useRef<HTMLDivElement>(null);
  const [mouseClick, setMouseClick] = useState<boolean>(false);
  const [ripplePosition, setRipplePosition] = useState({});

  // Apply position if it changes
  useEffect(() => {
    mainRippleRef?.current?.style.setProperty("x", props.position.x.toString() + "px");
    mainRippleRef?.current?.style.setProperty("y", props.position.y.toString() + "px");
  }, [props.position]);

  // Detect mouse press
  useEffect(() => {
    mainRippleRef.current?.addEventListener("click", rippleClick);
    return () => {
      mainRippleRef.current?.removeEventListener("click", rippleClick);
    };
  }, []);

  const rippleClick = (e: MouseEvent) => {
    setRipplePosition({ x: e.x, y: e.y });
    setMouseClick(true);
    setTimeout(() => {
      setMouseClick(false);
    }, 1000);
  };

  useEffect(() => {
    console.log(ripplePosition);
  }, [ripplePosition]);

  return (
    <div className="mainRippleEffect" ref={mainRippleRef}>
      <div className={`ripple1 ${mouseClick ? "startAnimation" : ""}`}></div>
      <div className={`ripple2 ${mouseClick ? "startAnimation" : ""}`}></div>
      <div className={`ripple3 ${mouseClick ? "startAnimation" : ""}`}></div>
    </div>
  );
}

export default RippleEffect;
