import React from "react";

function ArrowSvg({ value }) {
  if (value ==="right")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M8 4l8 8-8 8" />
      </svg>
    );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M16 4l-8 8 8 8" />
    </svg>
  );
}

export default ArrowSvg;
