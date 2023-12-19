import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appStore from "../utils/appStore";
import { changeLanguage } from "../utils/configSlice";
import { logo, NETFLIX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useRef();

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

  const handleLanguageChange = ()=>{
    dispatch(changeLanguage(language));
  }
  return (
    <div className="">
      {/* we have two headers , one is when user is signesd in and other if it is not */}
      {user ? (
        <div className="flex justify-between absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black p-2">
          <div className="py-4 pl-4 z-10 ">
            <img
              className="cursor-pointer drop-shadow-lg"
              src={NETFLIX_LOGO}
              alt="netflix logo"
              width={200}
            />
          </div>
          <div className="flex m-6 space-x-6 pr-6 pt-2">
          <select className="bg-red-600 p-2 py-0 h-10 text-sm font-bold rounded-lg drop-shadow-lg cursor-pointer" onClick={handleLanguageChange} ref={language}>
            <option value='en' className='p-4 m-2 bg-opacity-50'>English</option>
            <option value='hi' className='p-4 m-2 bg-opacity-50'>Hindi</option>
          </select>

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
            src={NETFLIX_LOGO}
            alt="netflix logo"
            width={200}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
