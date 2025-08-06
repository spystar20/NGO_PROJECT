import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full flex flex-col gap-5 py-10 bg-[#3E2723] text-[#FDEBD0]'>
        <div className='flex items-center flex-col'>
 <div className='flex items-center'>
        <img className='w-[5vw]' src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png" alt="" />
   <span className='text-center text-2xl font-[Imperial_script] font-semibold'>Basti Ki Pathshala Foundation​</span>
    </div>
    </div>
    <span className='w-full h-0.5 flex bg-[#FDEBD0]'></span>
    <div className='flex flex-col-reverse gap-3 md:flex-row justify-between items-center px-10'>
        <h1 className='font-[Kalam] font-light text-center'>Copyright ©2025 created by SANTOSHI. All rights reserved.</h1>
         <div className='text-2xl flex items-center gap-4'>
<FaFacebookF className='hover:scale-110 cursor-pointer scale-100'/>
<FaInstagram className='hover:scale-110 cursor-pointer scale-100'/>
<FaXTwitter className='hover:scale-110 cursor-pointer scale-100'/>

    </div>
    </div>
    </div>
  )
}

export default Footer