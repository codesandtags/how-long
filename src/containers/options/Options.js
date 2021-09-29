import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="App__options">
      <div className="App__option">
        <Link to="/fiscal-year">💪🏼 Fiscal Year</Link>
      </div>
      <div className="App__option">
        <Link to="/toronto">🇨🇦 Toronto</Link>
      </div>
      <div className="App__option">
        <Link to="/churrita">🥰 Churrita</Link>
      </div>
    </div>
  );
};

export default Options;
