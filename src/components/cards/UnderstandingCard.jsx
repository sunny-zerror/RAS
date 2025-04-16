import React, { useState } from 'react';

const UnderstandingCard = ({ index, data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className=" w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[28vw] flex flex-col justify-center pr-0 md:pr-10 gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="w-full h-[8vh]">

          <img
            className={`w-[15%] absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            src={data.img}
            alt=""
            />
          <img
            className={`w-[15%] absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            src={data.hoverimg}
            alt=""
            />
            </div>
        </div>
        <h2 className=" text-lg lg:text-xl font-medium cursor-default">{data.heading}</h2>
        <p className=" text-xs lg:text-base leading-tight">{data.para}</p>
      </div>
    </div>
  );
};

export default UnderstandingCard;
