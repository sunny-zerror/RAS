import React, { useEffect } from 'react';

const Header = () => {
  
  return (
    <div>

      <div id='header' className="w-full fixed top-0 left-0 h-[10vh] z-[99] px-12    flex items-center justify-between bg-white ">
        <div className="w-[20%] ">
          <img className='w-[50%]' src="/logos/logo.svg" alt="" />
        </div>
        <div className="flex gap-10 font-semibold items-center  text-sm  ">
        <p className=' hover:text-[#EA1B22] duration-200 cursor-pointer hover:underline  '>Our Services</p>
        <p className=' hover:text-[#EA1B22] duration-200 cursor-pointer hover:underline  '>Explore Fleet</p>
        <p className=' hover:text-[#EA1B22] duration-200 cursor-pointer hover:underline  ' >Partner With Us</p>
        <p className=' hover:text-[#EA1B22] duration-200 cursor-pointer hover:underline  '>Our Approach</p>
        <p className=' hover:text-[#EA1B22] duration-200 cursor-pointer hover:underline  '>Our Edge</p>
        </div>

      </div>
    </div>
  )
}

export default Header