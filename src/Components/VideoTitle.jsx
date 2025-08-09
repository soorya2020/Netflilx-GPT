import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black ">
      <div className="pt-96 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-2/4 py-4 text-xl">{overview}</p>
        <div className="">
          <button className=" py-2 px-4 bg-white text-lg  text-black  rounded-md hover:bg-opacity-85">
            ▶️ Play
          </button>
          <button className=" py-2 px-4 bg-gray-400 text-lg rounded-md mx-4 hover:bg-opacity-85">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
