import React from "react";

import Timer from "../../components/timer/Timer";

import "./FiscalYear.css";

const FiscalYear = () => {
  return (
    <div className="FiscalYear">
      <header className="FiscalYear__header">
        <h1>How long have I lived the level #33?</h1>
        <Timer
          initialTime="2021-09-28 20:00:00"
          description="Time working hard and playing hard my fiscal year "
        />
      </header>
    </div>
  );
};

export default FiscalYear;
