import React, { useState, useEffect } from "react";
import duration from "dayjs/plugin/duration";
import * as dayjs from "dayjs";
import confetti from "canvas-confetti";

import "./Countdown.css";

const getCalculateTime = (initialTime, isCountdown) => {
   let initial = dayjs(initialTime);
   let now = dayjs();
   let difference = isCountdown ? initial.diff(now) : now.diff(initial);

   return difference;
};

function Countdown({ initialTime, description, isCountdown }) {
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
      <div className="Timeline">
         <h1 id="headline">Nos veremos otra vez en</h1>
         <ul>
            <li>
               <span id="days">53</span>days
            </li>
            <li>
               <span id="hours">02</span>Hours
            </li>
            <li>
               <span id="minutes">18</span>Minutes
            </li>
            <li>
               <span id="seconds">24</span>Seconds
            </li>
         </ul>
      </div>
   );
}

export default Countdown;
