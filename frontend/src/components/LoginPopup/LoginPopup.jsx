import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'

const Login = ({setShowLogin}) => {

  const [currState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type='text' placeholder='ENter Your Namee' required/>}
          <input type='email' placeholder='Enter Your Email' required/>
          <input type='password' placeholder='Enter Your Password' required/>

        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By clicking on the "Login" button, you agree to our</p>
        </div>
        {currState==='Login'
        ?<p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span  onClick={()=>setCurrentState("Login")}>Click here</span></p>

        }

      </form>
       
      
    </div>
  )
}

export default Login
