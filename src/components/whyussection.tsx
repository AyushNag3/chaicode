
export const Whyus = () => {
    return (
        <>
        <div className="flex flex-col justify-center ">
          <nav className="w-fit border-b bg-white ">
      <div className=" px-6 flex  justify-around py-4">
        
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

     <div className="w-80 border rounded-md mt-10 ml-150 py-4 px-2 font-opensans">
       <p>Trusted by 1.5M code learners</p>
     </div>

    </div>
        </>
    )
}