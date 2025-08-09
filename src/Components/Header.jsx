import React, { useEffect } from "react";
import { LOGO, USER_PROFILE } from "../constants";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sync Firebase Auth with Redux
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="z-10 absolute px-10  bg-gradient-to-b from-black flex justify-between">
      <img className="p-4 w-1/12" src={LOGO} alt="" />
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
