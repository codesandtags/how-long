import React from "react";

import Timer from "../../components/timer/Timer";

import "./Toronto.css";

const Toronto = () => {
  return (
    <div className="Toronto">
      <header className="Toronto__header">
        <h1>How long have I been?</h1>
        <Timer
          initialTime="2021-02-17 16:00:00"
          description="I arrived to 🇨🇦 Toronto on "
        />
      </header>
    </div>
  );
};

export default Toronto;
