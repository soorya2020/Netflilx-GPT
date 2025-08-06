import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import Login from "./Login";
import Browse from "./Browse";

function Body() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Sync Firebase Auth with Redux
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  // Routes with protection
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/browse" /> : <Login />,
    },
    {
      path: "/browse",
      element: user ? <Browse /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default Body;
