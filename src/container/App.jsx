import { useState } from "react";
import Countdown from "../components/countdown/Countdown";
import Timeline from "../components/timeline/Timeline";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         <div></div>
         <Countdown></Countdown>
         <Timeline></Timeline>
      </div>
   );
}

export default App;
