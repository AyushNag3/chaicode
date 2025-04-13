import React from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'motion/react'
import { useState , useRef, useEffect} from 'react'


export const Whyus = () => {

  const [isVisible, setIsVisible] = useState(false)
    const ballRef = useRef(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Update state based on whether the ball is visible
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting)
          })
        },
        {
          threshold: 0.2, // Trigger when at least 20% of the element is visible
        },
      )
      // Start observing the ball element
      if (ballRef.current) {
        observer.observe(ballRef.current)
      }

      return () => {
        if (ballRef.current) {
          observer.unobserve(ballRef.current)
        }
      }
    }, [])


    return (
        <>
        <motion.div 
        
        ref={ballRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        className="flex flex-col justify-center h-[vh] ">
  <div>
    <div className=" w-fit fixed border-b-2 bg-white  ">
      <div className=" px-6 flex  justify-around pb-2">

        <div className="text-3xl text-gray-800 mr-100 pt-4">
          ChaiCode
        </div>
      
        <div className="flex flex-row items-center gap-20 pt-2 pr-5 text-lg font-semibold ">
          <div className="relative inline-flex items-center font-semibold text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Cohorts
            {/* Red dot next to Cohorts */}
            <span className="ml-1 inline-block w-2 h-2 rounded-full bg-red-500 mt-1"></span>
          </div>
          <div className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Udemy
          </div>
          <div  className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Docs
          </div>
          <div  className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Reviews
          </div>
        </div>

        
        <div className=''>
          <motion.button
          whileHover={{
            // scale : 1.1
          }}
            whileTap={{
              scale : [0.90,1.1]
            }} 
           className=" bg-slate-100 rounded-lg hover:bg-slate-200 hover:cursor-pointer ml-80 mt-6">
            Login
          </motion.button>
        </div>

      </div>
    </div>
    </div>
 

     <div className="w-60 border rounded-md mt-35 ml-155 py-2 px-0 shadow-lg transition-all duration-700 hover:scale-110 ">
       <p>Trusted by 1.5M code learners</p>
     </div>
   <div className='flex flex-col justify-center ml-56'>
   {/* <div className="w-8xl  pl-5 mt-3 "> */}
      <div className='font-stretch-150% text-7xl'>Consistency and Community </div>
      <div className='mt-8 font-medium text-3xl '>An unmatched learning experience for coding courses</div>
    {/* </div> */}
   </div>
     <div className="mt-8 ml-100 text-xl flex flex-col items-start">
      <p className="">Content is everywhere, we provide a learning </p>
       <p> experience that is unmatched. Bounties, peer learning </p>
       <p> peer code reviews, Virtual hostel, Alumni Network, Doubt sessions,</p>
        <p> Group projects and so many other activities to keep you on track. </p> 
     
     </div>

  
  <div className="flex w-110 gap-4 h-20 py-4 pl-6 mt-12 ml-130 text-4xl border-2 rounded-lg border-amber-400 shadow-lg transition-all duration-700 hover:scale-110">
      <p>Check all Live Cohorts</p>
      <div className="flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
  </span>
</div>

  </div>

  <div className='ml-115 pt-4 '>
<ReactPlayer width={550} height={300} controls={true} playing={true} light={true} url='https://youtu.be/RDagRV7ueMI?si=uckG58qqU_Y5BxMT' />
</div>

<div>
  <div className='ml-56 mt-20'>
    <p className='text-2xl'>Love that we get from our community</p>
    <p className='text-4xl mt-3 font-medium'>Tweet Love</p>
  </div>

<div className='dark'>


</div>

</div>
    </motion.div>
        </>
    )
}