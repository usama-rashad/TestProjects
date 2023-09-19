import { useEffect } from "react";
import "./App.scss";

// Components
import Counter from "./components/Counter/Counter";
import RippleEffect from "./components/RippleEffect/RippleEffect";

// Hooks
import useMouseLocation from "./hooks/useMouseLocation";

function App() {
  const mousePosition = useMouseLocation();

  return (
    <div className="mainApp">
      <RippleEffect position={mousePosition} />
    </div>
  );
}

export default App;

{
  /* <Counter startValue={0} endValue={10} /> */
}
