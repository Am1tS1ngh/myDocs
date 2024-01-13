/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
import Login from './components/Login';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Upload from './components/Upload';
import CardForm from './components/CardForm';


function App() {
  const ref = useRef(null);
  const [userID, setUserID] = useState(null)
  
  useEffect(() => {
    // Check if user is logged in using your authentication logic
    const isLoggedIn = localStorage.getItem('isDocsUserLogin');

    if (isLoggedIn) {
      // If logged in, set userID from localStorage or wherever it is stored
      const storedUserID = localStorage.getItem('myDocsUserID');
      setUserID(storedUserID);
    }
  }, []);

  return (
    <div ref={ref} className='relative w-full h-screen bg-zinc-800 overflow-hidden'>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login setUserID={setUserID} userID={userID}/>}/>
          <Route exact path="/register"  element={<Register setUserID={setUserID} userID={userID}/>}/>
          <Route exact path="/:user/docs" element={userID ? (
                <Foreground setUserID={setUserID} userID={userID} />
              ) : (
                <Navigate to='/' />
              )}/>
          <Route exact path="/:user/upload" element={<CardForm reference={ref} usersID={userID}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App