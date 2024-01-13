/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import CardForm from './CardForm';
import Upload from './Upload';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion"
import Login from './Login';
import { getFiles } from '../../auth/getfiles';
import LoadingCard from './LoadingCard';
import NoFilesAlert from './NoFilesAlert';
import Logout from './Logout';




function Foreground() {
    const navigate = useNavigate()
    let { user } = useParams();
    const ref = useRef(null);
    const userId = localStorage.getItem("myDocsUserID");
    const [files, setFiles] = useState([]);
    console.log("user id at foreground ",userId)

    

    // 
  


    useEffect(() => {
      const fetchData = async () => {
        try {
          if (user !== localStorage.getItem("isDocsUserLogin")) {
            navigate('/NotFound');
            return;
          }
  
          const result = await getFiles(userId);
          setFiles(result);
        } catch (error) {
          // Handle error
          console.error('Error:', error);
        }
      };
  
      fetchData();
      
    }, [userId, user]);

  return (
    <>

      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        <Upload reference={ref} user={user} userId={userId}/>
        { files.length !== 0 ?
        files.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        )): <NoFilesAlert reference={ref} />
}
        {/* <LoadingCard/> */}
        <Logout reference={ref}/>
      </div>
    </>
  )
}

export default Foreground