/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
import Login from './components/Login';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Register';
import NotFound from './components/NotFound';
// import Upload from './components/Upload';
import CardForm from './components/CardForm';


function App() {
  const ref = useRef(null);
 
  return (
    <div ref={ref} className='relative w-full h-screen bg-zinc-800 overflow-hidden'>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register"  element={<Register/>}/>
          <Route exact path="/:user/docs" element={<Foreground/>}/>
          <Route exact path="/:user/upload" element={<CardForm reference={ref}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App