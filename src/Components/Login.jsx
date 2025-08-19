import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMAGE } from "../constants";
import { validateFormData } from "../utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleButtonClick = (e) => {
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!isSignInForm && password !== confirmPasswordRef.current.value) {
      setErrorMessage("password do not match");
      setLoading(false);
      return;
    }

    const message = validateFormData(email, password);

    setErrorMessage(message);

    if (message) {
      setLoading(false);
      return
    }

    //signin or signup
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setLoading(false);
          setErrorMessage(error.message);
        });
    }
  };

  const toggleForm = (e) => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img
          className=" h-screen md:h-auto object-cover"
          src={BG_IMAGE}
          alt=""
        />
      </div>

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className=" md:w-3/12 mt-40 mx-auto right-0 left-0 absolute p-8 md:p-12  bg-black  text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-xl md:text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          name="Email"
          id=""
          ref={emailRef}
          placeholder="Email"
          className="p-3 md:p-4  my-3 w-full bg-gray-900 rounded-sm opacity-70 border border-gray-700 "
        />
        <input
          type="password"
          name="password"
          id=""
          ref={passwordRef}
          placeholder="Password"
          className="p-3 md:p-4 my-3 w-full  bg-gray-900  rounded-sm opacity-70 border border-gray-700 "
        />
        {!isSignInForm && (
          <input
            type="text"
            name="ValidatePassword"
            id=""
            placeholder="Validate Password"
            ref={confirmPasswordRef}
            className="p-3 md:p-4  my-3 w-full  bg-gray-900  rounded-sm opacity-70  border border-gray-700 "
          />
        )}
        {errorMessage && <p className="text-red-500">⚠️ {errorMessage}</p>}
        <button
          className="bg-red-700 p-3 my-4 w-full rounded-md opacity-80"
          onClick={handleButtonClick}
        >
          {isSignInForm ? (
            loading ? (
              <p className="text-xl"> . . . </p>
            ) : (
              "Sign In"
            )
          ) : loading ? (
            <p className="text-xl"> . . . </p>
          ) : (
            "Sign Up"
          )}
        </button>
        <p onClick={toggleForm} className=" cursor-pointer mt-3">
          {isSignInForm
            ? "New to BingeBox? SignUp now"
            : "Already a user? signIn now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
