import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./Calc.scss";
import { Button, CircularProgress } from "@mui/material";
import { RootState, AppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { setBusy, setIdle } from "./calcReducer";

function Calc() {
  const [sumLimit, setSumLimit] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);
  const [delay, setDelay] = useState<number>(0);
  const [busy, setBusy] = useState(false);

  // Reducer
  const dispatch = AppDispatch();
  const calcState = useSelector((state: RootState) => state.calc);

  const expensiveAdd = useCallback(
    (limit: number): number => {
      setBusy((prev) => (prev = true));
      let startTime = Date.now();
      let result = 0;
      for (let i = 0; i <= limit; i++) {
        result += i;
      }
      let endTime = Date.now();
      let elapsedTime = endTime - startTime;
      setDelay(elapsedTime);
      setBusy((prev) => (prev = false));
      return result;
    },
    [sumLimit]
  );

  useEffect(() => {
    console.log("State changed to " + calcState.isBusy);
  }, [calcState.isBusy]);

  const buttonAction = () => {
    setSum(expensiveAdd(sumLimit));
  };

  const inputAction = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value > 9999999999) value = 9999999999;
    setSumLimit((prev) => (prev = value));
  };

  return (
    <div className="mainCalc">
      <span className="title">{sum}</span>
      <input value={sumLimit} onChange={(e) => inputAction(e)} />
      <Button
        onClick={buttonAction}
        variant="contained"
        size="small"
        endIcon={busy ? <CircularProgress sx={{ color: "white" }} size="16px" /> : null}
      >
        Start
      </Button>
      <span className="message">{delay} milliseconds</span>
    </div>
  );
}

export const MemoizedCalc = React.memo(Calc);
