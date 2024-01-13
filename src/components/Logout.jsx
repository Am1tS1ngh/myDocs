/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion"

const Logout = (reference, setUserID) => {
    const navigate = useNavigate()
    const handleLogout = ()=>{

      setUserID(null)
      navigate('/')
      }
  return (
    <><motion.div
    drag
    dragConstraints={reference}
    whileDrag={{ scale: 1.1 }}
    dragElastic={0.1}
    dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
    className="fixed bottom-2 left-[47%] w-[120px] h-[90px] rounded-[45px] bg-orange-400/10 backdrop-blur-sm  text-white overflow-hidden">
    
    <button type='button' className=' w-full h-full text-2xl text-orange-400' onClick={handleLogout}>
          Logout
    </button>
  </motion.div>
    
    </>
  )
}

export default Logout