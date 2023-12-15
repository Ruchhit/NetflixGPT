import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidateData } from '../utils/Validate';


const Login = () => {

    const[isSignInForm , setIsSignInForm] = useState(true);
    const[errorMsg , setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        console.log(email);
        console.log(password);
       
        const msg = ValidateData(email.current.value,password.current.value);
        console.log(msg);

        setErrorMsg(msg);


    }
    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className='relative'>
         <Header/>
         <div className='absolute'>
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix logo' />
         </div> 
         <form onSubmit={(e)=> e.preventDefault} className='absolute w-3/12 bg-black my-44 mx-auto right-0 left-0 p-4'>
            <h1 className='text-white text-3xl font-serif p-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1> 
            {
                !isSignInForm && (<input type='text' placeholder='enter your full name' className=' m-4 p-2 bg-slate-700 rounded-sm text-white w-80'/>)
            }
            <input ref={email} type='email' placeholder='Enter your email' className=' m-4 p-2  bg-slate-700 rounded-sm text-white w-80'/>
            <input ref={password} type='password' placeholder='enter your password' className=' m-4 p-2 bg-slate-700 rounded-sm text-white w-80'/>
            <p className='font-medium py-2 text-red-500 pl-4  '>{errorMsg}</p>
            <button onClick={handleButtonClick} type='button' className='text-white bg-red-600 m-2 p-2 ml-4 w-80 rounded-sm text-sm '> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-white pt-4 pb-4 cursor-pointer ' onClick={toggleSignInForm}>{ isSignInForm ? "New to Netflix? Sign up now." : "Already have Account ? SignIn Now."} </p>
         </form>
    </div>

  )
}

export default Login