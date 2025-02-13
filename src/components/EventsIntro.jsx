import React, { useRef } from "react";
import { compassBG } from "../utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import EventsName from "./EventsName";
import { useGSAP } from "@gsap/react";
import '../events.css';

gsap.registerPlugin(ScrollTrigger);

const EventsIntro = () => {
  const bg1 = useRef(null);
  const imgcontainer=useRef(null);
  const img=useRef(null);
  const text1=useRef(null);

  useLayoutEffect(() => {
    // Animation for text expansion on page load
    gsap.from(text1.current, {
      scale: 0.5,          // Start at half the size
      opacity: 0,          // Start with invisible text
      duration: 3,         // 2 seconds for the animation
      ease: "power3.out",  // Smooth easing for a nice expansion
    });

    // ScrollTrigger setup for bg1 and imgcontainer as before
    let ctx = gsap.context(() => {
      // ScrollTrigger for bg1 element
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });

      // Timeline for image container animations
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgcontainer.current,
            pin: imgcontainer.current,
            scrub: 1,
            start: "0% 0%",
          }
        })
        .to(img.current, { transform: "translateZ(2200px)" })
        .to(text1.current, { y: -800 }, "<");
    });

    return () => ctx.revert();
  }, []);
  
  return (
    <div className="relative sm:w-5/12 md:w-8/12 ">
      <div
        ref={bg1}
        className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"
      ></div>
      <section className="">
        <div ref={imgcontainer} className="img-container perspective flex items-center justify-center h-screen w-screen">
          {/* <img ref={img} className="img h-[500px] -mt-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]" src={compassBG} alt="" /> */}
          
          
          <div className="absolute flex flex-col items-center justify center z-[2] md:items-center">
            <h1 ref={text1} className="text-[120px] font-pirata -mt-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]">
              <span className="text-stroke" id="title">Let the Loot</span> Begin!
            </h1>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default EventsIntro;
