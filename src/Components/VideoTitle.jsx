import React from "react";
import {
  FaBeer,
  FaIcons,
  FaInfoCircle,
  FaPlay,
  FaPlayCircle,
} from "react-icons/fa";
import { Fa0 } from "react-icons/fa6";

function VideoTitle({ title, overview }) {
  if (!title && !overview) return;
  return (
    <div className=" w-full   aspect-video absolute text-white bg-gradient-to-r ">
      <div className=" pt-24 md:pt-72 md:px-12">
        <h1 className=" text-3xl md:text-6xl ml-3 md:ml-0 font-bold">{title}</h1>
        <p className=" hidden md:block w-2/4 py-4  md:text-lg">{overview}</p>
        <div className=" flex  md:gap-3">
          <button className="scale-75 md:scale-100 cursor-not-allowed p-3 px-5 bg-white md:text-xl flex items-center gap-2  text-black  rounded-md hover:bg-opacity-85">
            <FaPlay />
            <p>Play</p>
          </button>
          <button className=" scale-75 md:scale-100 cursor-not-allowed p-3 px-5 bg-gray-400 md:text-xl flex items-center gap-2 rounded-md md:mx-4 hover:bg-opacity-85">
            <FaInfoCircle />
            <p>More Info</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
