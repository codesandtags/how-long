import { useState } from "react";
import "./Timeline.css";

import timelineEvents from "./timeline-example.json";

function Timeline() {
   const generateTimeline = () => {
      if (Array.isArray(timelineEvents) && timelineEvents.length > 0) {
         console.log(timelineEvents);
         return timelineEvents.map((sequence) => {
            const sequenceDate = new Date(sequence.date);
            return (
               <div className="cd-timeline-block" key={sequence.date}>
                  <div
                     className={"cd-timeline-img cd-".concat(
                        sequence.iconClass
                     )}
                  >
                     <img src={sequence.iconUrl} alt={sequence.iconTitle} />
                  </div>

                  <div className="cd-timeline-content">
                     <h2>{sequence.title}</h2>
                     <p>{sequence.description}</p>
                     <a href={sequence.link} className="cd-read-more">
                        Read more
                     </a>
                     <span className="cd-date">
                        {sequenceDate.toUTCString()}
                     </span>
                  </div>
               </div>
            );
         });
      }
   };

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
