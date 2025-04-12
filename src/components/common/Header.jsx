import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="w-full h-[10vh]  absolute top-0 left-0 z-[99]  flex items-center justify-end">
        <div className="flex gap-10 font-semibold items-center  text-sm px-12 ">
        <p>Our Services</p>
        <p>Explore Fleet</p>
        <p className='px-3 rounded-lg py-1 bg-[#EA1B22] text-white'>Partner With Us</p>
        <p>Our Approach</p>
        <p>Our Edge</p>
        </div>
      </div>
    </div>
  )
}

export default Header