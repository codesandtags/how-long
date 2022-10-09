import { useState, useEffect } from "react";
import axios from "axios";

import "./Timeline.css";

// import timelineData from "./timeline-example.json";

function Timeline() {
   const [timelineData, setTimelineData] = useState([]);

   const getTimelineData = () => {
      const url =
         "https://script.googleusercontent.com/macros/echo?user_content_key=AsmdjY7yNAMvc0wJ60KKGrzLstdpt7GaBYX6vuhKWI6YoG6r_fsRZkC88jGpxLsY7EMbz3OcZOIjt5F7zUcLQcbjohHfaNRZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDkBNwHshA4YFKfkbL9rSe9WCTTCdhKTRfMeFI08VRJ3c0GpXxWUxR3NazeKt6leCPy2zdXCV6Dpof31nplj_jlWhDK48XMiCNz9Jw9Md8uu&lib=MEKx6WaPwCUK-E8u96qd13T92dzoimtFY";

      return axios
         .get(url)
         .then((res) => {
            console.log(res.data);
            setTimelineData(res.data.slice(1));
         })
         .catch((error) => console.log(error));
   };

   const generateTimeline = () => {
      if (Array.isArray(timelineData) && timelineData.length > 0) {
         return timelineData.map((sequence) => {
            const sequenceDate = new Date(sequence.date);
            const dateFormatted = sequenceDate
               ? sequenceDate
                    .toGMTString()
                    .replaceAll(/ \d\d:\d\d:\d\d GMT/gi, "")
               : "No date";

            return (
               <div className="cd-timeline-block" key={sequence.date}>
                  <div className={"cd-timeline-img"}>
                     <div className="emoji">{sequence.emoji}</div>
                  </div>

                  <div className="cd-timeline-content">
                     <h2>{sequence.title}</h2>
                     <p>{sequence.description}</p>
                     <span className="cd-date">🗓 {dateFormatted}</span>
                  </div>
               </div>
            );
         });
      }
   };

   useEffect(() => {
      getTimelineData();
   }, []);

   return (
      <>
         <header>
            <h1>These are SOME the special moments in our life.</h1>
         </header>
         <section id="cd-timeline" className="cd-container">
            {generateTimeline()}
         </section>
      </>
   );
}

export default Timeline;
