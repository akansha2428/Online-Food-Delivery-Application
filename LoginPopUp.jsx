import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setshowLogin}) => {
    const [currState,setCurrState]=useState("Sign Up");
  return (
    <div className='login-popup'>
    <form className='login-popup-container'>
         <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon}></img>
         </div>
         <div className='login-popup-inputs'>
           {currState==="Login"?<></>:  <input type='text' placeholder='Your name' required></input>}
           <input type='email' placeholder='Your email' required></input>
           <input type='password'placeholder='Password' required></input>
         </div>
         <button>{currState==="Sign Up"?"Create account":"Login"}</button>
         <div className='login-popup-condition'>
           <input type="checkbox" required></input>
           <p>By continuning , i agree to the terms of use & privacy policy</p>
         </div>
         {currState==='Login'?
         <p>create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
         <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
         }
    </form>
       </div>
  )
}

export default LoginPopup
