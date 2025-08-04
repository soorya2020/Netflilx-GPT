import React, { useState } from "react";
import Header from "./Header";
import { BG_IMAGE } from "../constants";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(false);

  const toggleForm = (e) => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full" src={BG_IMAGE} alt="" />
      </div>

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 mt-40 mx-auto right-0 left-0 absolute p-12  bg-black  text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          name="username"
          id=""
          className="p-4 my-3 w-full bg-gray-800 rounded-sm opacity-70"
        />
        <input
          type="text"
          name="password"
          id=""
          className="p-4 my-3 w-full  bg-gray-800  rounded-sm opacity-70"
        />
        {!isSignInForm && (
          <input
            type="text"
            name="password"
            id=""
            className="p-4 my-3 w-full  bg-gray-800  rounded-sm opacity-70"
          />
        )}

        <button className="bg-red-700 p-3 my-4 w-full rounded-md opacity-80">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleForm} className=" cursor-pointer mt-3">
          {isSignInForm
            ? "New to Netflix? SignUp now"
            : "Already a user? signIn now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
