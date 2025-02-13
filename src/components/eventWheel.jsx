import React, { useRef } from "react";
import { wheelBG } from "../utils";
import { useState } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventWheel = () => {
  const [showCalender, setShowCalender] = useState(false);
  useEffect(() => {
    // The wheel image rotation animation
    gsap.to(".wheelimg", {
      rotation: 360, // Rotate the wheel 360 degrees
      scrollTrigger: {
        trigger: ".wheelimg", // The element that triggers the animation
        start: "top bottom", // Start when the top of the wheel hits the bottom of the viewport
        end: "bottom top", // End when the bottom of the wheel hits the top of the viewport
        scrub: 0.5, // Link the scroll position to the animation (smoothly)
        onLeave: () => {
          // Fade out the wheel once it's no longer in view
          gsap.to(".wheelimg", {
            opacity: 0,
            duration:1, // Time it takes to fade out
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          // Make the wheel visible again when it re-enters the viewport from the top
          gsap.to(".wheelimg", {
            opacity: 1,
            duration:1,// Time it takes to fade in
            ease: "power2.in",
          });
        },
        onUpdate: ({ progress }) => {
          // Only allow the fade-in if the scroll position is back in the visible range
          // Prevent it from reappearing immediately when it's in an unimportant area
          if (progress < 0 || progress > 1) {
            gsap.to(".wheelimg", {
              opacity: 0,  // Ensure the wheel remains invisible if the progress is outside of the scroll range
            });
          }
        },
      },
      ease: "linear", // Linear rotation during scroll
    });
  }, []);
  return (
    <div>
      <img
        src={wheelBG}
        className="wheelimg flex  "
        alt="wheel"
        
      />
      
      
      {/* {showCalender?<div className='event-calender'>Scroll</div>:<div></div>} */}
    </div>
  );
};

export default EventWheel;
