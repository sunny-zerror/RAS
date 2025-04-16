import React from 'react';

const ServicesCard = ({ title, description, buttons }) => {
  return (
    <div>
      <div className="w-full min-h-[22vh] flex flex-col overflow-hidden rounded-xl border-black border p-5 hover:border-transparent hover:bg-[#EA1B22] group transition-all duration-700">
        <p className=' text-sm md:text-lg font-semibold mb-2 group-hover:text-white'>{title}</p>
        <p className=' text-xs md:text-sm leading-tight  group-hover:text-white'>{description}</p>
        <div className="w-full mt-5 grid grid-cols-2 gap-5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-1000">
          {buttons.map((btn, idx) => (
            <button key={idx} className='border-2 text-xs md:text-sm cursor-default border-white text-white px-4 py-2 rounded-xl'>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
