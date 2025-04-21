import React, { useState } from 'react';

const UnderstandingCard = ({ index, data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className=" w-full flex flex-col justify-center  gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="w-full h-[7vh] md:h-[10vh]">

            <img
              className={` w-[30%] lg:w-[20%] xl:w-[15%] absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              src={data.img}
              alt=""
            />
            <img
              className={` w-[30%] lg:w-[20%] xl:w-[15%] absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              src={data.hoverimg}
              alt=""
            />
          </div>
        </div>
        <h2 className=" text-lg lg:text-xl font-medium cursor-default">{data.heading}</h2>
        <p className=" text-sm lg:text-base leading-tight">{data.para}</p>
      </div>
    </div>
  );
};

export default UnderstandingCard;
