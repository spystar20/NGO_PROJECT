import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Navbar = () => {
    const [isOpen ,setIsOpen] = useState(false)
    const handletoggle =()=>{
setIsOpen(!isOpen)
    }
    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,     
  });
}, []);
  return (
    <div  className='sticky top-0 z-[100]    w-full flex justify-between font-[Outfit] items-center px-10 py-2 bg-[#FDEBD0]'>
        {/* logo */}
    <div>
        <img className='md:w-[5vw] w-[10vw]' src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png" alt="" />
    </div>
    <ul className='hidden md:flex justify-center items-center gap-3 md:gap-10 text-xl capitalize font-light text-[#3E2723]'>
        <li className='hover:text-[#8E5E7C] '>
            <Link to="/">Home </Link>
        </li>
        <li className='hover:text-[#8E5E7C] '>
            <Link to="/about">about us </Link>
        </li>
        <li className='hover:text-[#8E5E7C] '>
               <Link to="/volunteer">volunteer with us </Link>
        </li>
    </ul>
    <CiMenuFries  onClick={handletoggle} className='text-2xl md:hidden' />
    { isOpen  && (
   <ul className='flex flex-col bg-[#3E2723] top-[3.5rem] pad absolute  justify-center left-0 w-full py-6 items-center gap-3 md:gap-10 text-xl capitalize font-light text-[#FDEBD0]'>
        <li className='hover:text-[#8E5E7C] ' onClick={handletoggle} >
            <Link to="/"  >Home </Link>
        </li>
        <li className='hover:text-[#8E5E7C] ' onClick={handletoggle} >
            <Link to="/about" >about us </Link>
        </li>
        <li className='hover:text-[#8E5E7C] ' onClick={handletoggle} >
               <Link to="/volunteer">volunteer with us </Link>
        </li>
    </ul>)
    }
    </div>
  )
}

export default Navbar