import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-[100]    w-full flex justify-between font-[Outfit] items-center px-10 py-2 bg-[#FDEBD0]'>
        {/* logo */}
    <div>
        <img className='w-[5vw]' src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png" alt="" />
    </div>
    <ul className='flex justify-center items-center gap-10 text-xl capitalize font-light text-[#3E2723]'>
        <li className='hover:text-[#8E5E7C] '>
            <a href="/">Home</a>
        </li>
        <li className='hover:text-[#8E5E7C] '>
            <a href="/about">about us</a>
        </li>
        <li className='hover:text-[#8E5E7C] '>
           <a href="/volunteer">volunteer with us</a> 
        </li>
    </ul>
    </div>
  )
}

export default Navbar