import React, { useEffect, useReducer, useState } from "react";

export interface ICounterSettings {
  externalReset?: boolean;
  instance: number;
  delay: number;
}

function useCounter({ delay = 1000, instance = 0 }: ICounterSettings) {
  const [value, setValue] = useState(0);
  let id: any;

  const resetCounter = () => {
    setValue(0);
  };

  useEffect(() => {
    id = setInterval(() => {
      setValue((prev) => prev + 1);
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);

  return { value, resetCounter };
}

export default useCounter;
