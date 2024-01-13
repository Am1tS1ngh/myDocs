/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../auth/authenticate';

const dataURI = "https://us-east-1.aws.data.mongodb-api.com/app/mydocsapp-vartu/endpoint/";

const Register = () => {
    const [registerData, setRegisterData] = useState({})

    const navigate = useNavigate();
    const handleSubmit = ()=>{
        registerUser(registerData, navigate)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterData({
          ...registerData,
          [name]: value,
        });
      };
  return (
    <div className='w-full h-screen flex justify-center items-center fixed z-[3]'>
  <div className="w-full bg-grey-lightest  pt-4">
    <div className="container mx-auto py-8">
      <div className="w-5/6 lg:w-1/2 mx-auto bg-white-300 backdrop-filter backdrop-blur-sm  rounded shadow">
            <div className="py-4 px-8 text-white text-center text-xl  uppercase font-bold border-b border-grey-lighter">REGISTER</div>
            <div className="py-4 text-center px-8">
                <div className="flex text-center mb-4">
                    <div className="w-1/2  mr-1">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                        <input 
                        className="appearance-none bg-transparent border rounded w-full py-2 px-3 text-white" 
                        id="first_name" 
                        type="text" 
                        value={registerData.first_name}
                        onChange={handleInputChange}
                        name='first_name'
                        placeholder="Your first name"
                        required={true}/>
                    </div>
                    <div className="w-1/2 ml-1">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
                        <input 
                        className="appearance-none bg-transparent border rounded w-full py-2 px-3 text-white" 
                        id="last_name"
                        value={registerData.last_name}
                        onChange={handleInputChange}
                        name='last_name' 
                        type="text" 
                        placeholder="Your last name"
                        required={true}/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                    <input 
                    className="appearance-none bg-transparent border rounded w-full py-2 px-3 text-white" 
                    id="email"
                    value={registerData.email}
                    onChange={handleInputChange} 
                    name='email'
                    type="email" 
                    placeholder="Your email address"
                    required={true}/>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input 
                    className="appearance-none bg-transparent border rounded w-full py-2 px-3 text-white" 
                    id="password" 
                    value={registerData.password}
                    onChange={handleInputChange}
                    name='password'
                    type="password" 
                    minLength={6}
                    placeholder="Your secure password"
                    required={true}
                    />
                    <p className="text-white text-xs mt-1">At least 6 characters</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button 
                    className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" 
                    type="button"
                    onClick={handleSubmit}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        <p className="text-center my-4">
            <Link to="/" className="text-white text-sm no-underline hover:text-grey-darker">I already have an account</Link>
        </p>
    </div>
  </div>
    </div>

  )
}

export default Register