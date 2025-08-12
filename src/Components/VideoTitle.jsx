import React from "react";

function VideoTitle({ title, overview }) {
  if (!title && !overview) return;
  return (
    <div className=" w-full   aspect-video absolute text-white bg-gradient-to-r ">
      <div className="pt-72 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-2/4 py-4 text-lg">{overview}</p>
        <div className="">
          <button className=" cursor-not-allowed p-3 px-5 bg-white text-xl  text-black  rounded-md hover:bg-opacity-85">
            ▶️ Play
          </button>
          <button className=" cursor-not-allowed p-3 px-5 bg-gray-400 text-xl rounded-md mx-4 hover:bg-opacity-85">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
