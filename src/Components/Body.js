import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import appStore from "../utils/appStore";
import { auth } from "../utils/firebase";
const Body = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (appStore) {
       
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         const { uid, email, displayName, photoURL } = user;
  //         dispatch(addUser({ uid, email, displayName, photoURL }));
  //       } else {
  //         dispatch(removeUser());
  //       }
  //     });
  //   }
  // }, []);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
