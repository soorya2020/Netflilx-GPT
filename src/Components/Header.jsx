import React from "react";
import { LOGO, USER_PROFILE } from "../constants";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="z-10 absolute px-10  bg-gradient-to-b from-black flex justify-between">
      <img className="p-4 w-1/12" src={LOGO} alt="" srcset="" />
      {user && (
        <div className="flex p-2">
          <img className="" src={USER_PROFILE} alt="user profile image" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white text-sm rounded-sm"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
