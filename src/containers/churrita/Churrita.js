import React from "react";

import Timer from "../../components/timer/Timer";

import "./Churrita.css";

const Churrita = () => {
  return (
    <div className="Churrita">
      <header className="Churrita__header">
        <h1>I will see you soon ❤️</h1>
        <Timer
          initialTime="2023-02-01 12:00:00"
          description="I will arrive to 🇨🇦 Toronto on "
          isCountdown
        />
      </header>
    </div>
  );
};

export default Churrita;
