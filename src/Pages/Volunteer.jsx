import React from 'react'
import { FaHeart } from "react-icons/fa";
const Volunteer = () => {
    return (
        <div className='w-full bg-[#FDEBD0] '>
            <div  className='w-full py-20 bg-[#7B3F61] flex flex-col items-center gap-2 '>
                <h2 data-aos="fade-zoom-in"  className=' md:text-4xl text-2xl text-[#FDEBD0] uppercase text-center font-bold '>calling out all voulnteers</h2>
                <div className='flex items-center gap-2'><span data-aos="fade-right" className='md:w-[15rem] w-[9rem] h-0.5 bg-[#FDEBD0] '></span><FaHeart className='text-xl text-[#FDEBD0]' /><span data-aos="fade-left" className='md:w-[15rem] w-[9rem] h-0.5 bg-[#FDEBD0]  '></span></div>
            </div>
            <div className='flex flex-col py-10 '>
                <div className='flex flex-col gap-3 items-center justify-center' >
                <h2 data-aos="fade-down"  className='text-3xl capitalize text-center font-bold'>become a volunter</h2>
                <p data-aos="fade-down"  className='capitalize text-xl text-center italic'>fill out the form to help us make a differnce</p>
                </div>
                <div data-aos="fade-zoom-in"  className='py-10 px-5 md:px-40'>
                <form action="get">
                    <div className='flex flex-col bg-[#7B3F61] text-[#FDEBD0]   items-start gap-5 justify-center w-full p-10 rounded-2xl '>           
                    <label htmlFor="username" className='flex flex-col gap-1 w-full'>
                        <span className='text-xl font-semibold capitalize'>enter your name</span>
                        <input type="text" className='border-2 outline-none rounded-lg py-1 w-full' name="username" id="name" />
                    </label>
                  
                    <label htmlFor="email" className='flex flex-col gap-1 w-full'>
                        <span className='text-xl font-semibold capitalize'> email </span>
                        <input type="email" className='border-2 outline-none rounded-lg py-1 w-full' name="email" id="mail" />
                    </label>
                    <label htmlFor="tele" className='flex flex-col gap-1 w-full'>
                        <span className='text-xl font-semibold capitalize'> enter your mobile number</span>
                        <input type="tel" className='border-2 outline-none rounded-lg py-1 w-full' name="tele" id="tele" />
                    </label>
                    <div className='flex justify-start flex-col gap-3'>
                    <span className='text-xl  font-semibold capitalize'>prefered role </span>
                    <div className='flex flex-wrap md:flex-row gap-6 justify-center'>
                    <label htmlFor="teaching" className='flex items-center justify-center gap-2'><span className='text-lg font-medium capitalize'>teaching</span>
          <input type="radio" name="teaching" id="" />
                    </label>
<label htmlFor="reading"  className='flex items-center justify-center gap-2'><span className='text-lg font-medium capitalize'>reading</span>
          <input type="radio" name="reading" id="" />
                    </label>
                    <label htmlFor="creative"  className='flex items-center justify-center gap-2'><span className='text-lg font-medium capitalize'>creative</span>
          <input type="radio" name="creative" id="" />
                    </label>
                    <label htmlFor="counselling"  className='flex items-center justify-center gap-2'><span className='text-lg font-medium capitalize'>counselling</span>
          <input type="radio" name="counselling" id="" />
                    </label>
                    </div>
                    </div>
                    <label htmlFor="rate"className='flex flex-col gap-1 w-full' >
                        <span className='text-xl font-semibold capitalize' >how would you rate your availability for volunteering</span>
                       <input type="text"  className='border-2 outline-none rounded-lg py-1 w-full'  name='text' />
                    </label>
                      <label htmlFor="position"   className='flex flex-col gap-1 w-full'>
                        <span className='text-xl font-semibold capitalize'>why do you want to volunteer</span>
                        <input type="text" className='border-2 outline-none rounded-lg py-1 w-full'  name="position" id="position" />
                    </label>
                      <label htmlFor="position"  className='flex flex-col gap-1 w-full' >
                        <span className='text-xl font-semibold capitalize'>do you have any specific days or time when you're available</span>
                        <input type="text"  className='border-2 outline-none rounded-lg py-1 w-full'  name="position" id="position" />
                    </label>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Volunteer