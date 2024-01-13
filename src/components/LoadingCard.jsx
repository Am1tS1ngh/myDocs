/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function LoadingCard({ reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <div>
        <LuFileSpreadsheet />
        <span>File title</span>
      </div>
      <p className="text-sm mt-5 font-semibold leading-tight">
        file description
      </p>
      <div className="footer absolute bottom-0 w-full   left-0">
        <div className="flex items-center justify-between px-8  py-3 mb-3">
          <h5>0mb</h5>

          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload size=".7em" color="#fff" />
          </span>
        </div>
        <div className="tag w-full py-4 bg-blue-500  flex items-center justify-center">
          <h3 className="text-sm font-semibold">Download</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingCard;
