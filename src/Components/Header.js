import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appStore from "../utils/appStore";
import { logo, NETFLIX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (appStore) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
    }
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = ()=>{
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="">
      {/* we have two headers , one is when user is signesd in and other if it is not */}
      {user ? (
        <div className="flex justify-between absolute top-0 left-0 right-0 z-10 ">
          <div className="py-4 pl-4 z-10 ">
            <img
              className="cursor-pointer drop-shadow-lg"
              src={NETFLIX_LOGO}
              alt="netflix logo"
              width={200}
            />
          </div>
          <div className="flex m-6 space-x-6 pr-6 pt-2">
            <h3 className=" font-semibold font-serif text-lg py-2 text-white ">
              Hii..{user.displayName} 
            </h3>
            <button className="bg-red-600 p-2 py-0 h-10 text-sm font-bold rounded-lg drop-shadow-lg" onClick={handleGPTSearchClick}>GPTSearch</button>
            <img
              src={logo}
              alt="logo"
              className=" drop-shadow-lg w-11 h-11 cursor-pointer rounded-lg"
            />
            <button
              className="bg-red-600 p-2 py-0 h-10 text-sm font-bold rounded-lg drop-shadow-lg"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="py-4 pl-4 z-10 absolute">
          <img
            className="cursor-pointer drop-shadow-lg"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix logo"
            width={200}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
