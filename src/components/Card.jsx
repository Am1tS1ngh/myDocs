/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
    console.log(data.fileDownloadUrl)
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden"
      style={{ 
        backgroundImage: `url(${data.fileUrl})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        position: 'relative'}}>
      <div className="w-full h-full px-8 py-9" style={{

        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the opacity as needed
        borderRadius: 'inherit',
      }}><div>
      <div className="flex items-center justify-start"><LuFileSpreadsheet/><span className="px-2 font-semibold capitalize">{data.title}</span></div>
      </div>
      <p className="text-sm mt-5 font-semibold normal-case leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full   left-0">
        <div className="flex items-center justify-between px-8  py-3 mb-3">
          <h5>0{data.fileSize}mb</h5>
          <a
            href={data.fileDownloadUrl}
            className="w-7 h-7 bg-zinc-600 cursor-pointer rounded-full flex items-center justify-center"
          >
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </a>


        </div>
        <a href={data.fileDownloadUrl}>
          <div
            className="tag w-full py-4 bg-blue-500  flex items-center cursor-pointer justify-center"
          >
            <h3 className="text-sm font-semibold">Download</h3>
          </div>
          </a>
      </div>
      </div>
      
    </motion.div>
  );
}

export default Card;
