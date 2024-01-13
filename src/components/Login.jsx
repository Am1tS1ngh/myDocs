/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import {loginUser} from '../../auth/authenticate';

const Login = ({setUserID, userID}) => {
    const navigate = useNavigate();
    const userId  =  localStorage.getItem('')
    const [loginData, setLoginData] = useState({})

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        loginUser(loginData, navigate, setUserID)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
    };
  
  useEffect(()=>{
      console.log("tHIS is user id --> ",userID)
        if(userID){
          navigate(`/${userID}/docs`,{
            state: { setUserID: setUserID, userID: userID },
          })
        }
  },[])
  return (
    <>
    <div className="flex items-center fixed z-[3] h-screen w-full">
        <div className="w-full rounded text-center shadow-lg bg-white-300 backdrop-filter backdrop-blur-sm  p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-white text-xl uppercase font-bold mb-4">Login</span>      
        <form className="mb-4 text-center" onSubmit={handleFormSubmit}>
            <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-white text-xs mb-1">Username or Email</label>
                <input 
                className="w-full border rounded p-2 outline-none focus:shadow-outline" 
                type="email" 
                value={loginData.email}  
                onChange={handleInputChange} 
                name="email" 
                id="email" 
                placeholder="Username or Email" 
                required={true}/>
            </div>
            <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-white text-xs mb-1">Password</label>
                <input 
                className="w-full border rounded p-2 outline-none focus:shadow-outline" 
                type="password" 
                value={loginData.password}
                onChange={handleInputChange}
                name="password" 
                id="password" 
                placeholder="Password"
                required={true} />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>
        {/* <a className="text-blue-700 text-white text-center mx-2 text-sm" href="/">Forgot password?</a> */}
        <Link className="text-blue-700 text-white text-center text-sm" to="/Register">create an account</Link>
    </div>
  </div>

  </>
  )
}

export default Login