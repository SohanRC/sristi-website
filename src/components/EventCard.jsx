import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import { EventItem1, EventItem2 } from "../constants/eventItems";
import { useRef } from "react";
import { useSwipeable } from "react-swipeable";

import { useState } from "react";

const EventCard = () => {
  const [clickedButton, setClickedButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    setClickedButton(0); // Reset state
    setTimeout(() => {
      setClickedButton(buttonId); // Trigger the animation after reset
    }, 50);
  };

  const duplicateItems = (items) => {
    return [...items, ...items]; // Simply duplicate the array
  };

  return (
    <div>
      <div className="flex w-full h-[150px]  items-center justify-center gap-60">
        <button className="shadow-btn" onClick={() => handleButtonClick(1)}>
          Event 1
        </button>
        <button
          className="shadow-btn-2"
          onClick={() => {
            handleButtonClick(2);
          }}
        >
          Event 2
        </button>
      </div>
      <div className="note">
        {clickedButton == 1 ? (
          <p
            className={`blur-text font-pirata ${
              clickedButton === 1 ? "fade-in" : ""
            }`}
          >
            The Tech Titans Arena
          </p>
        ) : clickedButton == 2 ? (
          <p
            className={`blur-text font-pirata ${
              clickedButton === 2 ? "fade-in" : ""
            }`}
          >
            The Engineering Marvels Challenge
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="card-list text-white">
        {clickedButton === 1 ? (
          <>
            {duplicateItems(EventItem1).map((item) => (
              <div
                className="event-card"
                style={{
                  background: `url(${item.bgPhoto})`, // Set dynamic background from item.bgPhoto
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  
                }}
              >
                <div className="card-item" key={item.id}></div>
                <div>
                  <div className="card-name font-pirata">{item.name}</div>
                  <div className="card-description">{item.description}</div>
                </div>
              </div>
            ))}
          </>
        ) : clickedButton === 2 ? (
          <>
            {duplicateItems(EventItem2).map((item) => (
              <div className="event-card-2 ">
                <div className="card-item-2" key={item.id}>
                  {/*illustrated icon */}
                </div>
                <div>
                  <div className="card-name-2 font-pirata">{item.name}</div>
                  <div className="card-description-2">{item.description}</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EventCard;
