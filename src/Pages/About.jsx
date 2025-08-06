import React from 'react'

const About = () => {
  return (
    <div className='w-full  bg-[#FDEBD0] px-6 md:px-20 '>
      <div className='text-left grid grid-cols-1 md:grid-cols-2  justify-center py-10 gap-6 '>
        <h2 data-aos="fade-right" className='text-3xl md:text-5xl uppercase font-bold '>our story</h2>
        <div data-aos="fade-left" className='flex flex-col gap-4 items-center'>
          <p className='text-lg italic'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos? Sapiente inventore sint ut temporibus sequi repellendus deserunt voluptatem. Accusantium distinctio commodi ab suscipit nobis repellendus in voluptas, et nihil soluta animi optio! Et, architecto! Facilis nostrum laudantium hic iusto voluptatem maiores culpa tempore a corporis temporibus ex, quidem aut dolores molestias recusandae laboriosam eius quae, quod adipisci voluptas blanditiis enim velit? Quos dolorem quam quis totam! sit amet consectetur adipisicing elit. Est amet id minima. Iure dolores itaque delectus ipsum optio voluptatibus consequatur quae. Minima consequuntur ea vitae beatae dolores ex ratione voluptatem nostrum velit error repellendus saepe esse cupiditate, debitis ut nisi doloremque delectus illo quas molestiae ad dolor natus. Officia, expedita.</p>
          <div><button className='  hover:bg-[#7B3F61] px-6 py-2 text-xl font-semibold  text-[#3E2723]  hover:text-[#FDEBD0] rounded-full transition-all border cursor-pointer uppercase '>join us</button></div>
        </div>
      </div>
      <div className='text-left flex flex-col justify-center items-center py-10 gap-10 px-6 md:px-20'>
        <h2 data-aos="fade-down"  className='text-3xl md:text-5xl uppercase text-center font-bold '>our mission</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <p data-aos="fade-right" className='text-lg italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam iusto ipsum, asperiores dolorem cumque deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia?</p>
          <p data-aos="fade-left" className='text-lg italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam iusto ipsum, asperiores dolorem cumque deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora.</p>

        </div>
       <div><button className='  hover:bg-[#7B3F61] px-6 py-2 text-xl font-semibold  text-[#3E2723]  hover:text-[#FDEBD0] rounded-full transition-all border cursor-pointer uppercase '>join us</button></div>
      </div>
      <div className='py-10 flex flex-col gap-12  ' >
        <div className='flex flex-col '>
       <h2 data-aos="fade-down"  className='text-3xl md:text-5xl uppercase text-center font-bold '>Through Their Eyes</h2>
       <p data-aos="fade-down"  className='text-center italic '> Capturing moments of impact and hope.</p>
       </div>
       <div data-aos="fade-zoom-in"  className='grid grid-cols-6 px-6 md:px-20'>
        <img className="col-span-2 row-span-2 w-full h-full object-cover rounded-tl-2xl  brightness-50 hover:brightness-100 transition-all ease-out"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVcNQS4HDOYHHkw0XgAWSbVewzxvh4_b8g&s" alt="" />
        <img className="col-span-2 row-span-2 w-full h-full object-cover  brightness-50 hover:brightness-100 transition-all ease-out"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xZA7xPGtd132yAIBlHen1LVSUMZwtOlM5Q&s" alt="" />
        <img className="col-span-2 row-span-4 w-full h-full object-cover rounded-tr-2xl rounded-br-2xl brightness-50 hover:brightness-100 transition-all ease-out "  src="https://thumbs.dreamstime.com/b/learning-alphabets-child-education-to-write-english-language-black-board-chalk-program-rural-villagers-kids-50691466.jpg" alt="" />
        <img className="col-span-4 row-span-2 w-full h-full object-cove rounded-bl-2xl  brightness-50 hover:brightness-100 transition-all ease-out" src="https://donateabook.org.in/wp-content/uploads/MJ_RG_70-1-1024x6831-1.jpg" alt="" />
       </div>

      </div>
    </div>
  )
}

export default About