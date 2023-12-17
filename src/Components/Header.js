import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className= "bg-gradient-to-b from-black">
     

      {/* if user is signed in then only show this two buttons */}
      {user ? (
        <div className="flex justify-between ">
          <div className="py-4 pl-4 z-10 ">
            <img
              className="cursor-pointer drop-shadow-lg"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix logo"
              width={200}
            />
          </div>
          <div className="flex m-6 space-x-6 pr-6 pt-2">
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
      </div> )}
    </div>
  );
};

export default Header;
