import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/Validate";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import appStore from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_BG } from "../utils/constants";
 

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(name.current.value)

    const msg = ValidateData(email.current.value, password.current.value);
    console.log(msg);

    setErrorMsg(msg);

    // we r checking if it is valid and if everything is fine we get message as null
    if (msg === null) {
      // that means we need to create new user
      if (!isSignInForm) {
        // we need signup new user logic
          createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // user Signed up , so now also here we are extracting its name ( using updateProfile API )
            const user = userCredential.user;
            console.log(user)
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
                if (appStore) {
                   
                  onAuthStateChanged(auth, (user) => {
                    if (user) {
                      const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(addUser({ uid, email, displayName, photoURL }));
                    } else {
                      dispatch(removeUser());
                    }
                  });
                }
            
              navigate("/browse");
            }).catch((error) => {
              setErrorMsg(error.message)
              console.log(error.message)
            });
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + "&&" + errorMessage);
          });
           
      }
      else {
       
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + "-" + errorMessage);
          });
          navigate("/");
      }
    }  
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src= {NETFLIX_BG}
          alt="netflix logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault}
        className="absolute w-3/12 bg-black my-44 mx-auto right-0 left-0 p-4 bg-opacity-80"
      >
        <h1 className="text-white text-3xl font-serif p-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
           ref={name}
            type="text"
            placeholder="enter your full name"
            defaultValue=''
            className=" m-4 p-2 bg-slate-700 rounded-sm text-white w-80"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter your email"
          defaultValue=''
          className=" m-4 p-2  bg-slate-700 rounded-sm text-white w-80"
        />
        <input
          ref={password}
          type="password"
          placeholder="enter your password"
          defaultValue=''
          className=" m-4 p-2 bg-slate-700 rounded-sm text-white w-80"
        />
        <p className="font-medium py-2 text-red-500 pl-4  ">{errorMsg}</p>
        <button
          onClick={handleButtonClick}
          type="button"
          className="text-white bg-red-600 m-2 p-2 ml-4 w-80 rounded-sm text-sm "
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white pt-4 pb-4 cursor-pointer "
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have Account ? SignIn Now."}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
