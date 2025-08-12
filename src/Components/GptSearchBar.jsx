import React from "react";
import { LANGUAGE } from "../languageConstants";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const language = useSelector((store) => store.appConfig.language);
  return (
    <div className="pt-56 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="  w-1/2 bg-black grid grid-cols-12 rounded-sm "
      >
        <input
          className="p-4 m-2 col-span-9"
          type="text"
          name="Search"
          placeholder={LANGUAGE[language].GPT_SEARCH_PLACEHOLDER}
          id=""
        />
        <button className=" m-2 bg-red-700 rounded-sm col-span-3 ">
          {LANGUAGE[language].SEARCH}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
