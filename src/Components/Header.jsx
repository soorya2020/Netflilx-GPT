import React, { useEffect } from "react";
import { SUPPORTED_LANGUAGES, USER_PROFILE } from "../constants";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView, clearGptResutls } from "../redux/gptSlice";
import { changeLanguage } from "../redux/appConfigSlice";
// import logo from "../../public/logo.png";

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
    if (showSearch) {
      dispatch(clearGptResutls());
    }
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
      <div className="z-10  w-full   absolute bg-gradient-to-b from-black flex flex-col  md:flex-row  md:justify-between  ">
        <div className="mx-auto md:mx-0 md:ml-10">
          <img className="w-32 pt-3 " src="/logo.png" alt="" />
        </div>
        {user && (
          <div className="flex p-2 md:pt-4  md:pr-10 justify-center gap-5  w-screen md:w-2/6   md:justify-end">
            {showSearch && (
              <select
                name="language"
                id=""
                className="p-2 mx-2  bg-gray-300  text-black rounded-sm hover:opacity-60"
                value={language}
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language, index) => (
                  <option key={index} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGptSearchClick}
              className=" py-2  px-3 bg-gray-800  text-white rounded-md text-sm hover:opacity-70"
            >
              {showSearch ? "Home" : "GPT Search"}
            </button>
            <button
              onClick={handleSignOut}
              className="py-2  bg-gray-800 px-3 text-white text-sm rounded-md hover:opacity-70"
            >
              Sign-Out
            </button>

            <img
              className="hidden md:block cursor-pointer"
              src={USER_PROFILE}
              alt="user profile image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
