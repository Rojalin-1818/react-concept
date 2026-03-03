import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



 const Login = () => {
  const [userData,setUserData]=useState({
    email:"",
    password:""
  });
  

  const{email,password}=userData;

  const userdetails=JSON.parse(localStorage.getItem("userdetails"))

  const handleChange=((e)=>{
    setUserData(
      {
        ...userData,
      [e.target.name]:e.target.value
      }
    )
  });

  const[passwordIcon,setPasswordIcon]=useState(false);

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("jwt_token",JSON.stringify("sa re ga ma pa dha ni sha sare gama padha nisha*2"))
    navigate("/dashboard")
    
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-gray-300 p-8 rounded-2xl shadow-sm w-80">
    <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
    <div className="space-y-4 text-left">
      <form onSubmit={handleSubmit}>
        <div>
        <label className="block text-xs text-gray-400 mb-1">Email</label>
        <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:border-blue-400" name="email" value={email} onChange={handleChange}/>
      </div>
      <br />
      <div className='relative'>
        <label className="block text-xs text-gray-400 mb-1 ">Password</label>
        <input type={passwordIcon?"text":"password"} placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:border-blue-400 " name="password" value={password} onChange={handleChange}/>
        <div className='p-1 absolute top-6 right-5 cursor-pointer flex items-center justify-center' onClick={()=>setPasswordIcon(!passwordIcon)}>
            {
                passwordIcon?<FaEye size={20}/>:<FaEyeSlash size={20}/>


            }

        </div>
      </div>
      <br />
      <button type="submit" className="w-full bg-blue-500 text-white text-sm py-2 rounded-md hover:bg-blue-600" >Login</button>
      </form>
      <p className="text-[10px] text-gray-400 text-center">Don't have an account? <span className="text-blue-400 cursor-pointer"><Link to="/register">sign up</Link></span></p>
    </div>
  </div>
</div>
  )
}
export default Login