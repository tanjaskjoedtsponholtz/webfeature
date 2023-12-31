import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"

animate( "body", { opacity: [ 0, 1] }, { duration: 5 })
animate(".mereanimate", 
  { opacity: [ 0.4, 1, 0, 0.8], scale: [0.95, 1, 0.7, 0.9] }, 
  { delay: 5, duration: 4, direction: "alternate", repeat: Infinity }
)

//Progress bar
scroll(
    animate(".progress-bar", { scaleX: [0, 1] })
  );

//Snapped scroll buttom

document.querySelectorAll(".snap").forEach((section) => {
    const header = section.querySelector(".photostyle");
    scroll(animate(header, { y: [-100, 200] }), {
      target: header
    });
  });