
import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import cross from "../../assets/crs2.svg";
import { StoreContext } from '../Context/StoreContext';
import axios from 'axios';


const LoginPopup = ({setShowLogin}) => {
     const {url,setToken} = useContext(StoreContext);
    const [currState, setCurrState] = useState("Login");

         const [data,setData] = useState({
        name :"",
        email: "",
        password: ""
     })
    const onChangeHandler = (event) =>{
       const name = event.target.name;
       const value = event.target.value;
       setData(data=>({...data,[name]:value}))
    }
      const onLogin = async (event) =>{
       event.preventDefault();
      try{  
       let newUrl = url;
       if(currState==="Login"){
         newUrl += "/api/user/login"
       }
       else{
         newUrl += "/api/user/register"
       }
       const response = await axios.post(newUrl,data);
       console.log("Login response:", response.data);
       if(response.data.success)
       { 
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          setShowLogin(false)
       }
       else{
             alert(response.data.message)
       }
       } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong. Please try again.");
  }
    }


    

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
      <div className='login-popup-title'>
           <h2>{currState}</h2>
           <img onClick={()=>setShowLogin(false)} src={cross} alt='' />
        </div>
        <div className='login-popup-inputs'>
          {currState==="Login"?<></>:<input type="text" name='name' value={data.name} placeholder='Your name' required onChange={onChangeHandler}/>}
           <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='your email' required />
           
          <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='your password' required />
        </div>
     
       <button type='submit'>{currState==="SignUp"?"Create account":"Login"}</button>
       <div className='login-popup-condition'>
         <input type="checkbox" required />
         <p>By continuing,I agree to the terms of use & privacy policy. </p>
       </div>
       {currState==="Login"
       ?<p>Create a new account? <span onClick={()=>setCurrState("SignUp")}>Click here</span></p>
       :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
       }
       
          </form>
    </div>
  )
}

export default LoginPopup
