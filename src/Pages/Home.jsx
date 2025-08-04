import React from 'react'
import kids from '../assets/kids.jpg'
import hero from '../assets/hero-img.jpg'
import kid from '../assets/kid-2.jpg'
const Home = () => {



    return (
        <div className='w-full font-[Outfit] bg-[#FDEBD0] pt-12'>
            {/* hero-section */}
            <div className='flex justify-center items-center flex-col gap-8 px-10'>
                <h2 className='text-center text-7xl uppercase tracking-wide font-semibold font-[Oswald] '>Empower Through Education </h2>
                <span className='text-center text-4xl font-[Imperial_script] '>Basti Ki Pathshala Foundation​</span>
            </div>
            <div>
                <img className=' rounded-t-full pt-10' src="https://shridantrust.org/images/child-protection.jpg" alt="" />
            </div>
            {/* impact */}
            <div className='w-full py-20 px-10 flex flex-col  gap-16'>
                <div className='flex justify-center items-center flex-col gap-4'>
                <h2 className='text-center text-4xl font-bold uppercase'>We Work Together</h2>
                <p className='text-center text-sm px-40'>At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.</p>
                </div>
                <div className='flex justify-center items-center gap-10 cursor-pointer'>
                    <div className='flex flex-col gap-3 w-1/4  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>31,245</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Life Changed</h3>
                    </div>
                    <div className='flex flex-col gap-3 w-1/4  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>28,976</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Meals Served</h3>
                    </div>
                    <div className='flex flex-col gap-3 w-1/4  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>19,854</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Interns</h3>
                    </div>
                    <div className='flex flex-col gap-3 w-1/4  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>10,989</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Supporters</h3>
                    </div>
                </div>
            </div>
            {/* our mission */}
            <div className='w-full py-20 px-10 flex flex-col gap-16'>
                <div className='grid grid-cols-2 gap-8 '>
                    <div className='text-left flex flex-col justify-center  gap-6 '>
                        <h2 className=' text-4xl uppercase font-bold '>our mission</h2>
                        <p className='text-lg'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos? Sapiente inventore sint ut temporibus sequi repellendus deserunt voluptatem. Accusantium distinctio commodi ab suscipit nobis repellendus in voluptas, et nihil soluta animi optio! Et, architecto! Facilis nostrum laudantium hic iusto voluptatem maiores culpa tempore a corporis temporibus ex, quidem aut dolores molestias recusandae laboriosam eius quae, quod adipisci voluptas blanditiis enim velit? Quos dolorem quam quis totam! sit amet consectetur adipisicing elit. Est amet id minima. Iure dolores itaque delectus ipsum optio voluptatibus consequatur quae. Minima consequuntur ea vitae beatae dolores ex ratione voluptatem nostrum velit error repellendus saepe esse cupiditate, debitis ut nisi doloremque delectus illo quas molestiae ad dolor natus. Officia, expedita.</p>
                        <div><button className= 'bg-[#7B3F61] px-6 py-2 text-xl font-semibold capitalize text-[#FDEBD0] rounded-lg transition-all hover:scale-95 scale-100 cursor-pointer '>know more</button></div>
                    </div>
                <div className='flex items-center w-full' >
                  <img className='rounded-xl' src={kids} alt="" />
                    </div>
                </div>
            </div>
            {/* what we do */}
            <div className='w-full py-20 px-10 bg-[#3E2723] flex flex-col items-center justify-center gap-6 '>
          <h2 className='text-center text-4xl font-bold uppercase text-[#fdebd0] py-10'>what we do ?</h2>
          <div className='w-full flex h-[53vh]'>
           <div className='w-1/3 group'>
           <img className='w-full group-hover:opacity-45 '  src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG_20220925_133943-2048x1538.jpg" alt="" />
    <h1 className='text-2xl text-[#fdebd0] text-wrap text-center'>Empowerment & Self-Improvement</h1>
          <p className='text-[#fdebd0] bg-[#3E2723]  w-full bottom-[16rem] p-5 relative translate-y-5 rounded-t-4xl  group-hover:translate-y-0 transition-all ease-in opacity-0 group-hover:opacity-100'>
      Education empowers slum children to envision a life beyond their current circumstances. It instills in them a sense of self-worth and confidence, enabling them to dream big and pursue their aspirations. Through education, these children gain the tools to advocate for themselves, make informed decisions, and strive for a better quality of life.
    </p> 
           </div>
              <div className='w-1/3 group'><img className='w-full group-hover:opacity-45' src={kid} alt="" />
               <h1 className='text-2xl text-[#fdebd0] text-wrap text-center'>Building Resilience and Hope</h1>
               <p className='text-[#fdebd0] bg-[#3E2723]  w-full bottom-[16rem] p-5 relative translate-y-5 rounded-t-4xl group-hover:translate-y-0 transition-all ease-in  opacity-0 group-hover:opacity-100'>Education offers slum children a sense of hope and resilience in the face of adversity. It equips them with the skills to overcome challenges and navigate the complexities of their environment. By investing in their education, we provide these children with a beacon of hope, showing them that a brighter future is possible, no matter where they come from.</p>
              </div>
             <div className='w-1/3 group'> <img className='w-full group-hover:opacity-45' src={hero} alt="" />
          <h1 className='text-2xl text-[#fdebd0] text-wrap text-center'>Breaking the Cycle of Poverty</h1>
          <p className='text-[#fdebd0] bg-[#3E2723]  w-full bottom-[15rem] p-5 relative translate-y-5 rounded-t-4xl  group-hover:translate-y-0 transition-all ease-in opacity-0 group-hover:opacity-100'>Education offers underprivileged slum children a pathway out of poverty by providing them with the knowledge and skills necessary to secure better opportunities in the future. By empowering them with education, these children can break the intergenerational cycle of poverty and create a brighter future for themselves and their families.</p>
             </div>
          </div>
            </div>
        </div>
    )
}

export default Home