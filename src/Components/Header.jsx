import React from "react";
import { LOGO } from "../constants";

function Header() {
  return (
    <div className=" z-10 absolute px-8  bg-gradient-to-b from-black ">
      <img className="m-4 w-1/12" src={LOGO} alt="" srcset="" />
    </div>
  );
}

export default Header;
