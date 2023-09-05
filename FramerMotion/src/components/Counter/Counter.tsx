import "./Counter.scss";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ICounter {
  startValue: number;
  endValue: number;
}

function Counter(props: ICounter) {
  const [counterValue, setCounterValue] = useState(props.startValue);
  const [counterComplete, setCounterComplete] = useState(false);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (counterValue === props.endValue) {
        setCounterComplete(true);
        clearInterval(intervalId);
      } else {
        setCounterValue((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <AnimatePresence>
      {!counterComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 1 }} className={`mainCounter ${counterComplete}`}>
          <p className="counterText">Counter</p>
          <p className="counterValue">{counterValue}</p>
          <p className="counterText">/</p>
          <p className="counterValue">{props.endValue}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Counter;
