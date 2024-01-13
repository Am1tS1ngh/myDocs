/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { motion } from "framer-motion"
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { convertToBase64 } from "../../public/Base64Converter";
import { uploadFile } from '../../auth/uploadFile';
import Logout from './Logout';

function CardForm({reference}) {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const [base64String, setBase64String] = useState('');
  
    const [uploadState, setUploadState] = useState("Upload");
    let { user } = useParams();
    const handleSubmit = async (e) => {
      e.preventDefault()
      setUploadState("Uploading...")

      const success = await uploadFile({ title, desc, file });

    if (success) {
      // Navigate to /user/docs if the upload is successful
      setUploadState("Uploaded");
      navigate(`/${user}/docs`);
    }

      
    };
  

  useEffect(()=>{
    if(localStorage.getItem("isDocsUserLogin")!==user){
      // console.log("string")
      navigate('/NotFound')
    }
  },[navigate, user])
  return (
    <>
    <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 10}} className='relative top-1/4 left-1/3 flex-shrink-0 w-1/3 h-1/2 z-[4] rounded-[45px] bg-zinc-900/80 text-white px-8 py-10 overflow-hidden'>
        <form className="w-full max-w-md mx-auto p-8" onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="file" className="block text-sm mt-5 font-semibold leading-tight">
        Upload File:
      </label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={(e)=> setFile(e.target.files[0])}
        accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
        className="border border-gray-300 bg-transparent rounded-md w-full"
        required
      />
      <label htmlFor="title" className="block text-sm font-semibold leading-tight">
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        className=" border border-gray-300 bg-transparent rounded-md w-full"
        required
      />
      <label htmlFor="desc" className="block text-sm font-semibold leading-tight">
        Description:
      </label>
      <textarea
        id="desc"
        name="desc"
        rows="1"
        className="border bg-transparent border-gray-300 rounded-md w-full"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="absolute bottom-0 left-0 bg-blue-500  text-white px-8 py-4 w-full text-2xl font-semibold  hover:bg-blue-600"
      >
        {uploadState}
      </button>
    </form>
    <Logout reference={reference}/>
    </motion.div>
    </>
  )
}

export default CardForm