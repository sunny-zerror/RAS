import React, { useState } from 'react';
import RedBtn from '../buttons/RedBtn';

const IconWithLabel = ({ defaultImg, hoverImg, label , onSelectTank }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-[22%] md:w-[18%] cursor-pointer   gap-2 text-center center flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
      onClick={() => onSelectTank(label)}
       className="relative h-[8vh] w-full flex justify-center">
        <img
          src={defaultImg}
          alt=""
          className={`w-[80%] lg:w-[50%] absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={hoverImg}
          alt=""
          className={`w-[80%] lg:w-[50%] absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="h-[8vh]">
        <p className=" text-sm lg:text-base  px-4 font-semibold  ">{label}</p>

      </div>
    </div>
  );
};

const OurStrength = ({ onSelectTank }) => {
  return (
    <div className='pt-24 lg:pt-32 overflow-hidden'>
      <div id='our-edge' className="pad">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-5">Our Edge</h1>
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 items-center justify-between">
          <div className="w-full md:w-[45%] h-full flex md:gap-5 gap-10 flex-col">
            <div>
              <h2 className="font-semibold text-base leading-tight lg:text-2xl">
                Built on Responsibility. Driven by Safety. Powered by Expertise.
              </h2>
              <p className="mt-4 md:mt-4 text-sm md:text-lg leading-tight">
                We deliver specialized logistics solutions...
              </p>
            </div>
            <RedBtn text={'Get a Risk Free Audit Today'} />
          </div>

          <div className="flex mt-0 items-center justify-between md:justify-evenly w-full md:w-[50%] h-full">
              <IconWithLabel
                defaultImg="/icons/chemical_precision.webp"
                hoverImg="/icons/chemical_precision_hover.webp"
                label="Chemical"
                onSelectTank={onSelectTank}
                
              />
              <IconWithLabel
                defaultImg="/icons/grade_a_care.webp"
                hoverImg="/icons/grade_a_care_hover.webp"
                label="Food Grade"
                onSelectTank={onSelectTank}

                

              />
              <IconWithLabel
                defaultImg="/icons/cryochemical_mastery.webp"
                hoverImg="/icons/cryochemical_mastery_hover.webp"
                label="Specialance Specialty"
                onSelectTank={onSelectTank}

                
              />
          </div>
        </div>
      </div>
    </div>
  );
};


export default OurStrength;
