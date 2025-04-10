
export const Whyus = () => {
    return (
        <>
        <div className="flex flex-col justify-center ">
          <nav className="w-fit border-b bg-white ">
      <div className=" px-6 flex  justify-around pb-2">
        
        {/* Left Side: Logo or Site Name */}
        <div className="text-3xl text-gray-800 mr-100 pt-4">
          ChaiCode
        </div>

        {/* Middle: Links */}
        <div className="flex items-center gap-20 pt-2 pr-5 text-lg">
          <a href="#cohorts" className="relative inline-flex items-center text-gray-600 hover:text-gray-900">
            Cohorts
            {/* Red dot next to Cohorts */}
            <span className="ml-1 inline-block w-2 h-2 rounded-full bg-red-500 mt-1"></span>
          </a>
          <a href="#udemy" className="text-gray-600 hover:text-gray-900">
            Udemy
          </a>
          <a href="#docs" className="text-gray-600 hover:text-gray-900">
            Docs
          </a>
          <a href="#reviews" className="text-gray-600 hover:text-gray-900">
            Reviews
          </a>
        </div>

        {/* Right Side: Login Button */}
        <div>
          <button className="px-4  border border-gray-300 rounded hover:bg-gray-100 ml-80 pr-10 mt-6">
            Login
          </button>
        </div>

      </div>
    </nav>

     <div className="w-60 border rounded-md mt-10 ml-155 py-2 px-0 font-opensans">
       <p>Trusted by 1.5M code learners</p>
     </div>

     <div className="w-220 mt-5 ml-80 text-6xl">
      <p>Consistency and Community Learning for Coding Courses</p>
     </div>

     <div className="mt-8 ml-100 text-xl flex flex-col items-start">
      <p className="">Content is everywhere, we provide a learning </p>
       <p> experience that is unmatched. Bounties, peer learning </p>
       <p> peer code reviews, Virtual hostel, Alumni Network, Doubt sessions,</p>
        <p> Group projects and so many other activities to keep you on track. </p> 
     
     </div>
  
  <div className="flex w-90 gap-4 h-20 py-4 pl-6 mt-12 ml-140 text-3xl border-2 rounded-lg border-amber-400 ">
      <p>Check all Live Cohorts</p>
      <div className="flex items-center space-x-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
  </span>
</div>

  </div>


    </div>
        </>
    )
}