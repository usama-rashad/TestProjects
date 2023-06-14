import { useEffect, useState } from "react";
import Segment from "../Segment/Segment";
import "./ClockDisplay.scss";
import SecondsDot from "../SecondsDot/SecondsDot";

interface IClockSettings {
  frontColor: string;
  glowColor: string;
}

function ClockDisplay() {
  let [start, setStart] = useState(false);
  let [secondsPulse, setSecondsPulse] = useState(false);
  let [numbers, setNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let id = setInterval(() => {
      let date = new Date();
      let currentTimeString =
        date.getHours().toString().padStart(2, "0") +
        date.getMinutes().toString().padStart(2, "0") +
        date.getSeconds().toString().padStart(2, "0");
      let numberList = currentTimeString.split("").map((digit) => {
        return parseInt(digit);
      });
      setNumbers(numberList);
      setSecondsPulse((prev) => (prev = !prev));
    }, 500);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className="clockDisplaySegments">
      <Segment className="seg1" columns={5} rows={8} value={numbers[0]} />
      <Segment className="seg2" columns={5} rows={8} value={numbers[1]} />
      <SecondsDot pulse={secondsPulse} dotColor="red" isStatic={true} />
      <Segment className="seg1" columns={5} rows={8} value={numbers[2]} />
      <Segment className="seg2" columns={5} rows={8} value={numbers[3]} />
      <SecondsDot pulse={secondsPulse} dotColor="red" isStatic={true} />
      <Segment className="seg3" columns={5} rows={8} value={numbers[4]} />
      <Segment className="seg4" columns={5} rows={8} value={numbers[5]} />
    </div>
  );
}

export default ClockDisplay;
