/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaUpload } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


function Upload({reference,user}) {
    const handleClick = ()=>{

    }
  return (
    <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 10}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <div className='flex-col items-center justify-center w-full left-0'>
            <Link to={`/${user}/upload`} className='cursor-pointer'>
            <div className='flex items-center justify-center px-8 py-2'>
                { <FaUpload size="4em" color='rgba(189, 112, 36, 0.998)' />}
            </div>
            <div className='tag w-full  mb-3 flex items-center justify-center'>
            
            <h3 className='text-2xl text-orange-400 font-semibold '>Upload</h3>

            </div>
            </Link>
        <p className='text-sm font-semibold leading-tight text-center'>
        Accepting only specific document and image file extensions.
        </p>
        
        </div>
    </motion.div>
  )
}

export default Upload