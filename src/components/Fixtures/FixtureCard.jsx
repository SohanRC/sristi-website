import React, { useState } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";

function EventCard({ event, index, isEven }) {
  const [showDetails, setshowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.05,
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.15 },
        rotate: showDetails ? 0 : isEven ? -2 : 2,
      }}
      className="bg-gradient-to-br from-gray-900 to-black text-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg backdrop-filter backdrop-blur-lg border border-gray-800 relative"
    >
      <div className={`p-4 `}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-purple-400">
            {event.category}
          </span>
          <span className="text-xs text-gray-400">
            {event.date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
            {/* {event.date} */}
          </span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">{event.name}</h3>
        </div>
        <div className="flex items-center text-xs text-gray-400 mb-2">
          <FaMapMarkerAlt className="mr-1" />
          {event.venue}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-400">
            <FaClock className="mr-1" />
            {/* {event.date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} */}
            {event.time}
          </div>
          <button
            onClick={() => {
              setshowDetails(true);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-bold py-1 px-3 rounded-full transition-colors"
          >
            Details
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
        className={`${
          showDetails ? "visible" : "hidden"
        } absolute p-2 font-serif top-0 bg-gradient-to-br from-gray-900 to-black mb-3 flex flex-col gap-2 h-full w-full`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              setshowDetails(false);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-bold py-1 px-3 rounded-full transition-colors"
          >
            <ImCross/>
          </button>
        </div>
        <p className="px-2 text-xs lg:text-base">{event.description}</p>

      </motion.div>
    </motion.div>
  );
}

export default EventCard;
