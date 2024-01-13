/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function NoFilesAlert({reference}) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-orange-400/20 backdrop-blur-sm text-white  overflow-hidden"
    >
      <div className="tag w-full h-full pb-10 bg-transparent flex items-center justify-center" >
      {/* <LuFileSpreadsheet />  */}
      <div >
        <iframe src="https://giphy.com/embed/3zhxq2ttgN6rEw8SDx" 
        className="giphy-embed w-full h-full" 
        style={{ pointerEvents: 'none' }}
        allowFullScreen>
        </iframe>
      </div>
      {/* <p><a href="https://giphy.com/gifs/404-image-not-found-broken-icon-3zhxq2ttgN6rEw8SDx"></a></p> */}
      </div>
      <div className="footer absolute bottom-0 w-full   left-0">

          <div
            className="tag w-full pb-8 pt-4 bg-transparent flex items-center justify-center"
          >
            <h3 className="text-lg font-semibold">No files available.</h3>
          </div>
      </div>
      
    </motion.div>
  );
}

export default NoFilesAlert;
