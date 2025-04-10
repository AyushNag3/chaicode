import React from 'react'
import ReactPlayer from 'react-player'
import { Tweet } from 'react-tweet'
export const Whyus = () => {

    return (
        <>
        <div className="flex flex-col justify-center h-[vh] ">
          <nav className="w-fit border-b bg-white ">
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
          <button className="px-4 bg-slate-100 rounded-lg hover:bg-slate-200 hover:cursor-pointer ml-80 pr-10 mt-6">
            Login
          </button>
        </div>

      </div>
    </nav>

     <div className="w-60 border rounded-md mt-10 ml-155 py-2 px-0 font-opensans">
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


  
  <div className="flex w-110 gap-4 h-20 py-4 pl-6 mt-12 ml-130 text-4xl border-2 rounded-lg border-amber-400 ">
      <p>Check all Live Cohorts</p>
      <div className="flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
  </span>
</div>

  </div>

  <div className='ml-115 pt-4'>
<ReactPlayer width={550} height={300} controls={true} playing={true} light={true} url='https://youtu.be/RDagRV7ueMI?si=uckG58qqU_Y5BxMT' />
</div>

<div>
  <div className='ml-56 mt-20'>
    <p className='text-2xl'>Love that we get from our community</p>
    <p className='text-4xl mt-3 font-medium'>Tweet Love</p>
  </div>

<div className='dark'>
<Tweet id="1910306109539414088" />

</div>

</div>
    </div>
        </>
    )
}