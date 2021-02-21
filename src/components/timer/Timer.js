import React, { useState, useEffect } from "react";
import duration from "dayjs/plugin/duration";
import * as dayjs from "dayjs";
import confetti from "canvas-confetti";

import "./Timer.css";

const getCalculateTime = (initialTime, isCountdown) => {
  let initial = dayjs(initialTime);
  let now = dayjs();
  let difference = isCountdown ? initial.diff(now) : now.diff(initial);

  return difference;
};

export default ({ initialTime, description, isCountdown }) => {
  dayjs.extend(duration);
  const [calculateTime, setCalculateTime] = useState(
    dayjs.duration(getCalculateTime(initialTime, isCountdown), "milliseconds")
  );

  useEffect(() => {
    setInterval(() => {
      setCalculateTime(
        dayjs.duration(
          getCalculateTime(initialTime, isCountdown),
          "milliseconds"
        )
      );
    }, 1000);

    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 100,
        startVelocity: 40,
      });
    }, 1000);
  }, []);

  return (
    <div className="Timer">
      <div className="Timer__summary">
        <span>
          {description}
          {dayjs(initialTime).format("YYYY/MM/DD HH:MM")}
        </span>
      </div>
      <div className="Timer__block">
        <span className="Timer__value">{calculateTime.years()}</span>
        <span className="Timer__label">Years</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__value">{calculateTime.months()}</span>
        <span className="Timer__label">Months</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__value">{calculateTime.days()}</span>
        <span className="Timer__label">Days</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__value">{calculateTime.hours()}</span>
        <span className="Timer__label">Hours</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__value">{calculateTime.minutes()}</span>
        <span className="Timer__label">Minutes</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__value">{calculateTime.seconds()}</span>
        <span className="Timer__label">Seconds</span>
      </div>
    </div>
  );
};
