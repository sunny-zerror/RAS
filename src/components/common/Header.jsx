import React from 'react';

const navItems = [
  "Our Services",
  "Explore Fleet",
  "Partner With Us",
  "Our Approach",
  "Our Edge"
];

const Header = () => {
  return (
    <div>
      <div id='header' className="w-full  fixed top-0 left-0 h-[10vh] z-[99] px-12 flex items-center justify-between bg-white">
        <div className="w-[20%]">
          <img className='w-[50%]' src="/logos/logo.svg" alt="Logo" />
        </div>

        <div className=" max-[768px]:hidden flex gap-10 font-semibold items-center text-sm">
          {navItems.map((item, index) => (
            <div key={index} className="h-5 overflow-hidden whitespace-nowrap w-fit group">
              <p className='hover:text-[#EA1B22] duration-200 cursor-pointer group-hover:-translate-y-5'>{item}</p>
              <p className='hover:text-[#EA1B22] duration-200 cursor-pointer group-hover:-translate-y-5'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
