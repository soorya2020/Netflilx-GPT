import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_PROFILE } from "../constants";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView } from "../redux/gptSlice";
import { changeLanguage } from "../redux/appConfigSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.appConfig.language);
  const showSearch = useSelector((store) => store.gpt.showSearch);

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

  const handleGptSearchClick = (e) => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="z-10  w-full   absolute px-10 bg-gradient-to-b from-black flex justify-between   ">
        <div>
          <img className="w-32 pt-3" src={LOGO} alt="" />
        </div>
        {user && (
          <div className="flex p-2 w-2/6  justify-end">
            {showSearch && (
              <select
                name="language"
                id=""
                className="p-2 mx-2  bg-gray-300  text-black rounded-sm hover:opacity-60"
                value={language}
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option value={language.identifier}>{language.name}</option>
                ))}
              </select>
            )}
            <button
              onClick={handleGptSearchClick}
              className="  px-3 bg-gray-800  text-white rounded-sm text-sm hover:opacity-70"
            >
              {showSearch ? "Home" : "GPT Search"}
            </button>
            <button
              onClick={handleSignOut}
              className="mx-6  bg-gray-800 px-3 text-white text-sm rounded-sm hover:opacity-70"
            >
              Sign-Out
            </button>
            <img className="" src={USER_PROFILE} alt="user profile image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
