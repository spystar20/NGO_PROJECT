import React from 'react'
import { useEffect } from 'react'
import kids from '../assets/kids.jpg'
import hero from '../assets/hero-img.jpg'
import kid from '../assets/kid-2.jpg'
import useEmblaCarousel from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay'
import { TbChevronsRight } from "react-icons/tb";
import { BsPersonHeart } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";
const Home = () => {

    
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true} , [Autoplay({ speed: 0.3, startDelay: 1000 })],)

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])

    return (
        <div className='w-full font-[Outfit] bg-[#FDEBD0] pt-12'>
            {/* hero-section */}
            <div className='flex justify-center items-center flex-col gap-8 px-10'>
                <h2 data-aos="fade-down" className='text-center text-5xl md:text-7xl  uppercase tracking-wide font-semibold font-[Oswald] '>Empower Through Education </h2>
                <span data-aos="fade-down"  className='text-center text-4xl font-[Imperial_script] '>Basti Ki Pathshala Foundation​</span>
            </div>
            <div>
                <img data-aos="fade-zoom-in"  className=' rounded-t-full pt-10' src="https://shridantrust.org/images/child-protection.jpg" alt="" />
            </div>
            {/* impact */}
            <div className='w-full py-20 md:px-10 px-6 flex flex-col  gap-16'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <h2 data-aos="fade-down"  className='text-center text-4xl font-bold uppercase'>We Work Together</h2>
                    <p data-aos="fade-down"  className='text-center italic text-sm md:px-20 lg:px-40'>At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.</p>
                </div>
                <div className='flex  justify-center items-center gap-10 cursor-pointer lg:flex-nowrap flex-wrap lg:flex-row'>
                    <div data-aos='zoom-in' className='flex flex-col gap-3 lg:w-1/4 w-full text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>31,245</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Life Changed</h3>
                    </div>
                    <div data-aos='zoom-in'  className='flex flex-col gap-3 lg:w-1/4 w-full  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>28,976</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Meals Served</h3>
                    </div>
                    <div data-aos='zoom-in'  className='flex flex-col gap-3 lg:w-1/4 w-full  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>19,854</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Interns</h3>
                    </div>
                    <div data-aos='zoom-in'  className='flex flex-col gap-3 lg:w-1/4 w-full  text-center py-12 px-10 rounded-3xl  bg-[#3E2723]  text-white translate-y-0  scale-100 hover:-translate-y-3 hover:scale-105 transition-all shadow-xl'>
                        <span className='text-5xl font-medium '>10,989</span>
                        <h3 className='text-xl text-[#FDEBD0] '>Supporters</h3>
                    </div>
                </div>
            </div>
            {/* our mission */}
            <div className='w-full py-20 px-10  flex flex-col gap-16'>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-8 '>
                    <div className='text-left flex flex-col justify-center  gap-6 '>
                        <h2 data-aos="fade-right"  className=' text-4xl uppercase font-bold '>our mission</h2>
                        <p data-aos="fade-right" className='text-lg italic'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos? Sapiente inventore sint ut temporibus sequi repellendus deserunt voluptatem. Accusantium distinctio commodi ab suscipit nobis repellendus in voluptas, et nihil soluta animi optio! Et, architecto! Facilis nostrum laudantium hic iusto voluptatem maiores culpa tempore a corporis temporibus ex, quidem aut dolores molestias recusandae laboriosam eius quae, quod adipisci voluptas blanditiis enim velit? Quos dolorem quam quis totam! sit amet consectetur adipisicing elit. Est amet id minima. Iure dolores itaque delectus ipsum optio voluptatibus consequatur quae. Minima consequuntur ea vitae beatae dolores ex ratione voluptatem nostrum velit error repellendus saepe esse cupiditate, debitis ut nisi doloremque delectus illo quas molestiae ad dolor natus. Officia, expedita.</p>
                        <div data-aos="fade-right"><button className='bg-[#7B3F61] px-6 py-2 text-xl font-semibold capitalize text-[#FDEBD0] rounded-lg transition-all hover:scale-95 scale-100 cursor-pointer '>know more</button></div>
                    </div>
                    <div className='flex items-center w-full' >
                        <img data-aos='fade-left' className='rounded-xl' src={kids} alt="" />
                    </div>
                </div>
            </div>
            {/* what we do */}
            <div className='w-full py-10 px-5 md:py-20 lg:pb-40 md:px-10  md:pb-5 bg-[#7B3F61] flex flex-col items-center justify-center gap-6 '>
                <h2 data-aos="fade-down"  className='text-center text-4xl font-bold uppercase text-[#fdebd0] py-10'>what we do ?</h2>
                <div className='w-full flex  h-[53vh]'>
                    <div data-aos='zoom-in'  className='w-1/3 group'>
                        <img className='w-full group-hover:opacity-45 ' src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG_20220925_133943-2048x1538.jpg" alt="" />
                        <h1 className='text-2xl pt-2 text-[#fdebd0] text-wrap text-center'>Empowerment & Self-Improvement</h1>
                        <p className='text-[#fdebd0] bg-[#7B3F61] w-full bottom-[16rem] p-5 relative translate-y-5 rounded-t-4xl  group-hover:translate-y-0 transition-all ease-in opacity-0 group-hover:opacity-100'>
                            Education empowers slum children to envision a life beyond their current circumstances. It instills in them a sense of self-worth and confidence, enabling them to dream big and pursue their aspirations. Through education, these children gain the tools to advocate for themselves, make informed decisions, and strive for a better quality of life.
                        </p>
                    </div>
                    <div data-aos='zoom-in'  className='w-1/3 group'><img className='w-full group-hover:opacity-45' src={kid} alt="" />
                        <h1 className='text-2xl pt-5 text-[#fdebd0] text-wrap text-center'>Building Resilience and Hope</h1>
                        <p className='text-[#fdebd0] bg-[#7B3F61] w-full bottom-[16rem] p-5 relative translate-y-5 rounded-t-4xl group-hover:translate-y-0 transition-all ease-in  opacity-0 group-hover:opacity-100'>Education offers slum children a sense of hope and resilience in the face of adversity. It equips them with the skills to overcome challenges and navigate the complexities of their environment. By investing in their education, we provide these children with a beacon of hope, showing them that a brighter future is possible, no matter where they come from.</p>
                    </div>
                    <div data-aos='zoom-in'  className='w-1/3 group'> <img className='w-full group-hover:opacity-45' src={hero} alt="" />
                        <h1 className='text-2xl pt-5 text-[#fdebd0] text-wrap text-center'>Breaking the Cycle of Poverty</h1>
                        <p className='text-[#fdebd0] bg-[#7B3F61] w-full bottom-[15rem] p-5 relative translate-y-5 rounded-t-4xl  group-hover:translate-y-0 transition-all ease-in opacity-0 group-hover:opacity-100'>Education offers underprivileged slum children a pathway out of poverty by providing them with the knowledge and skills necessary to secure better opportunities in the future. By empowering them with education, these children can break the intergenerational cycle of poverty and create a brighter future for themselves and their families.</p>
                    </div>
                </div>
            </div>
            {/* support */}
            <div className='relative w-full pb-20  flex flex-col '>
           <div className='brightness-100  relative z-0 md:h-[35vw] h-[35vw] rounded-b-full py-20 m'  style={{   backgroundImage: `url('https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg')`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center' }}>
           <div className='absolute inset-0 bg-[#d7c6ac] opacity-60 rounded-b-full '></div>
  <div className='z-40 relative flex justify-center items-center w-full '><h1 className='text-shadow-xs text-center font-bold uppercase text-4xl  md:text-5xl'>join our team</h1></div>
        <div className=' z-40 lg:px-40 px-10  md:px-10 md:py-16 flex-col md:flex-row flex justify-center items-center gap-4 w-full '>
            <div data-aos="fade-right" className=' rounded-b-2xl pb-3 pl-6 flex flex-col md:gap-4 gap-2 shadow-2xl shadow-[#3E2723] bg-[#7B3F61] text-[#FDEBD0] hover:-translate-y-3 -translate-y-0 transition-all ease-in'>
<div className='flex  justify-between items-center'><h1 className='text-3xl font-semibold capitalize'>support </h1><span className='bg-[#FDEBD0] text-[#7B3F61]  p-4 rounded-bl-full '><FaHandHoldingHeart className='text-4xl' /></span></div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nulla quaerat nam assumenda sit accusantium at distinctio maiores incidunt culpa non. Labore praesentium accusamus magni tempore placeat ipsa adipisci repellendus.</p>
 <div><button className='text-[#3E2723] bg-[#FDEBD0] font-[Roboto]  font-black text-xl capitalize flex items-center italic px-3 py-2 rounded-xl' >learn more <span><TbChevronsRight /></span></button></div>
            </div>
             <div data-aos="fade-zoom-in"  className=' rounded-b-2xl pb-3 pl-6 flex flex-col md:gap-4 gap-2 shadow-2xl shadow-[#3E2723] bg-[#7B3F61] text-[#FDEBD0] hover:-translate-y-3 -translate-y-0 transition-all ease-in'>
<div className='flex  justify-between items-center'><h1 className='text-3xl font-semibold capitalize'>volunteer </h1><span className='bg-[#FDEBD0] text-[#7B3F61]  p-4 rounded-bl-full '><BsPersonHeart  className='text-4xl' /></span></div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nulla quaerat nam assumenda sit accusantium at distinctio maiores incidunt culpa non. Labore praesentium accusamus magni tempore placeat ipsa adipisci repellendus.</p>
 <div><button className='text-[#3E2723] bg-[#FDEBD0] font-[Roboto]  font-black text-xl capitalize flex items-center italic px-3 py-2 rounded-xl' >learn more <span><TbChevronsRight /></span></button></div>
            </div>
              <div data-aos="fade-left" className=' rounded-b-2xl pb-3 pl-6 flex flex-col md:gap-4 gap-2 shadow-2xl shadow-[#3E2723] bg-[#7B3F61] text-[#FDEBD0] hover:-translate-y-3 -translate-y-0 transition-all ease-in'>
<div className='flex  justify-between items-center'><h1 className='text-3xl font-semibold capitalize'>support </h1><span className='bg-[#FDEBD0] text-[#7B3F61]  p-4 rounded-bl-full '><FaDonate  className='text-4xl' /></span></div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nulla quaerat nam assumenda sit accusantium at distinctio maiores incidunt culpa non. Labore praesentium accusamus magni tempore placeat ipsa adipisci repellendus.</p>
 <div><button className='text-[#3E2723] bg-[#FDEBD0] font-[Roboto]  font-black text-xl capitalize flex items-center italic px-3 py-2 rounded-xl' >learn more <span><TbChevronsRight /></span></button></div>
            </div>
        
        </div>
    </div>
  </div>
  
           {/* testimonials */}
           <div className='w-full  gap-7 px-4 md:py-32 mt-[60rem] lg:mt-0 py-10 md:mt-[9rem] flex flex-col'>
            <div className='flex flex-col justify-center gap-3'>
            <h2 className=' text-center font-bold uppercase  text-4xl'>
                Intern Insights
            </h2>
            <span className='text-lg italic text-center'>Hear from Our Valued Team Members</span>
            </div>
        <div className="embla" ref={emblaRef}>
<div className='flex lg:px-20 md:px-6 gap-7 px-6 md:w-[40vw]   embla__container'>
            <div className=' embla__slide flex-[0_0_100%] bg-[#7B3F61] w-full pt-6 flex flex-col gap-3 rounded-xl shadow-xl '>
                <div className='px-6 '>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit vitae hic iure totam exercitationem quisquam accusamus! Distinctio, eaque consequuntur".</p>
                </div>
                <div className='flex justify-start items-start gap-6 bg-[#FDEBD0] px-3 py-2 w-[17rem] rounded-se-full'>
                    <div><img className='w-12 h-12 rounded-full' src="https://bastikipathshala.org/wp-content/uploads/2024/02/111111.jpg" alt="" /></div>
                    <div className='flex capitalize  flex-col justify-start items-start'><span className='text-lg font-semibold'>kanika rajput</span> <span className='text-lg font-light uppercase'>intern</span></div>
                    <span><ImQuotesRight className='text-lg mt-2' />
</span>
                </div>
            </div>
               <div className=' embla__slide   bg-[#7B3F61] w-full pt-6 flex flex-col gap-3 rounded-xl shadow-xl '>
                <div className='px-6  '>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit vitae hic iure totam exercitationem quisquam accusamus! Distinctio, eaque consequuntur".</p>
                </div>
                <div className='flex justify-start items-start gap-6 bg-[#FDEBD0] px-3 py-2 w-[90%] md:w-[17rem] rounded-se-full'>
                    <div><img className='w-12 h-12 rounded-full' src="https://bastikipathshala.org/wp-content/uploads/2024/02/111111.jpg" alt="" /></div>
                    <div className='flex capitalize  flex-col justify-start items-start'><span className='text-lg font-semibold'>kanika rajput</span> <span className='text-lg font-light uppercase'>intern</span></div>
                    <span><ImQuotesRight className='text-lg mt-2' />
</span>
                </div>
            </div>
                <div className=' embla__slide   bg-[#7B3F61] w-full pt-6 flex flex-col gap-3 rounded-xl shadow-xl '>
                <div className='px-6 '>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit vitae hic iure totam exercitationem quisquam accusamus! Distinctio, eaque consequuntur".</p>
                </div>
                <div className='flex justify-start items-start gap-6 bg-[#FDEBD0] px-3 py-2 w-[17rem] rounded-se-full'>
                    <div><img className='w-12 h-12 rounded-full' src="https://bastikipathshala.org/wp-content/uploads/2024/02/111111.jpg" alt="" /></div>
                    <div className='flex capitalize  flex-col justify-start items-start'><span className='text-lg font-semibold'>kanika rajput</span> <span className='text-lg font-light uppercase'>intern</span></div>
                    <span><ImQuotesRight className='text-lg mt-2' />
</span>
                </div>
            </div>
             <div className=' embla__slide  bg-[#7B3F61] w-full pt-6 flex flex-col gap-3 rounded-xl shadow-xl '>
                <div className='px-6 '>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit vitae hic iure totam exercitationem quisquam accusamus! Distinctio, eaque consequuntur".</p>
                </div>
                <div className='flex justify-start items-start gap-6 bg-[#FDEBD0] px-3 py-2 w-[17rem] rounded-se-full'>
                    <div><img className='w-12 h-12 rounded-full' src="https://bastikipathshala.org/wp-content/uploads/2024/02/111111.jpg" alt="" /></div>
                    <div className='flex capitalize  flex-col justify-start items-start'><span className='text-lg font-semibold'>kanika rajput</span> <span className='text-lg font-light uppercase'>intern</span></div>
                    <span><ImQuotesRight className='text-lg mt-2' />
</span>
                </div>
            </div>
             <div className=' embla__slide bg-[#7B3F61] w-full pt-6 flex flex-col gap-3 rounded-xl shadow-xl '>
                <div className='px-6 '>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit vitae hic iure totam exercitationem quisquam accusamus! Distinctio, eaque consequuntur".</p>
                </div>
                <div className='flex justify-start items-start gap-6 bg-[#FDEBD0] px-3 py-2 w-[17rem] rounded-se-full'>
                    <div><img className='w-12 h-12 rounded-full' src="https://bastikipathshala.org/wp-content/uploads/2024/02/111111.jpg" alt="" /></div>
                    <div className='flex capitalize  flex-col justify-start items-start'><span className='text-lg font-semibold'>kanika rajput</span> <span className='text-lg font-light uppercase'>intern</span></div>
                    <span><ImQuotesRight className='text-lg mt-2' />
</span>
                </div>
            </div>
             <div className=' embla__slide  bg-[#7B3F61] w-full pt-6 flex flex-col gap-3 rounded-xl shadow-xl '>
                <div className='px-6 '>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit vitae hic iure totam exercitationem quisquam accusamus! Distinctio, eaque consequuntur".</p>
                </div>
                <div className='flex justify-start items-start gap-6 bg-[#FDEBD0] px-3 py-2 w-[17rem] rounded-se-full'>
                    <div><img className='w-12 h-12 rounded-full' src="https://bastikipathshala.org/wp-content/uploads/2024/02/111111.jpg" alt="" /></div>
                    <div className='flex capitalize  flex-col justify-start items-start'><span className='text-lg font-semibold'>kanika rajput</span> <span className='text-lg font-light uppercase'>intern</span></div>
                    <span><ImQuotesRight className='text-lg mt-2' />
</span>
                </div>
            </div>
          </div>
          </div>
           </div>
        </div>
    )
}

export default Home