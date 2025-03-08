import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"

const Login = ({setShowLogin}) => {
  const {url,setToken} = useContext(StoreContext)

  const [currState,setCurrentState]=useState("Login")
  const [data,setData]= useState({
    name:"",
    email:"",
    password:""


  })


  const onChangeHandler =(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))

  }


  const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url;
    if(currState==='Login'){
      newUrl +="/api/user/login"

    }
    else{
      newUrl +="/api/user/register"
    }
    const response = await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)

    }
    else{
      alert(response.data.message)
    }

  }

  // useEffect(()=>{
  //   console.log(data);

  // },[data])

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='ENter Your Namee' required/>}
          <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter Your Email' required/>
          <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Enter Your Password' required/>

        </div>
        <button type='submit' >{currState==="Sign Up"?"Create account":"Login"}</button>
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
