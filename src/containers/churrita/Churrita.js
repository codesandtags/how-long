import React from "react";

import Timer from "../../components/timer/Timer";

import "./Churrita.css";

const Churrita = () => {
  return (
    <div className="Churrita">
      <header className="Churrita__header">
        <h1>How much time left?</h1>
        <Timer
          initialTime="2022-03-01 16:00:00"
          description="You will arrive to 🇨🇦 Toronto on "
          isCountdown
        />
      </header>
    </div>
  );
};

export default Churrita;
