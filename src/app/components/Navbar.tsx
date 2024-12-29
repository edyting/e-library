import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <div>
      <div className="bg-indigo-700 px-5 h-16 w-dvw">
        {/* main-container */}
        <div className="flex justify-between items-center h-full w-full">
          {/* logo */}
          <div className="">
              <h2 className='text-4xl font-bold text-white'> LOGO</h2>
          </div>
          {/* search */}
          <div className="w-2/6">
              <Search/>
          </div>
          {/* greetings */}
          <div className="">
              <h2 className='text-2xl font-bold text-white'> Greetings</h2>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
