import React, { useState } from 'react';
import RedBtn from '../buttons/RedBtn';

const IconWithLabel = ({ defaultImg, hoverImg, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-[22%] md:w-[18%]   gap-2 text-center center flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[8vh] w-full flex justify-center">
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
        <p className=" text-xs lg:text-sm  px-4 font-semibold  ">{label}</p>

      </div>
    </div>
  );
};

const OurStrength = () => {
  return (
    <div className='mt-10 lg:mt-32'>
      <div id='our-edge' className="pad  flex flex-col md:flex-row items-center justify-between">
        <div className=" w-full md:w-[45%]  h-full flex gap-5 flex-col ">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Our Edge</h1>
          <div>
            <p className="font-semibold text-xs md:text-lg">
              Built on Responsibility. Driven by Safety. Powered by Expertise.
            </p>
            <p className="mt-2 text-xs md:text-base leading-tight">
              We deliver specialized logistics solutions with a sharp focus on safety, sustainability, and performance. Our deep technical know-how, disciplined execution, and tailored approach enable seamless global movement of sensitive and regulated goods across global supply networks.
            </p>
          </div>
          <RedBtn text={'Get a Risk Free Audit Today'} />
        </div>

        <div className="flex mt-0  items-center justify-evenly w-full md:w-[50%] h-full">
          <IconWithLabel
            defaultImg="/icons/chemical_precision.webp"
            hoverImg="/icons/chemical_precision_hover.webp"
            label="Chemical Fluency"
          />
          <IconWithLabel
            defaultImg="/icons/grade_a_care.webp"
            hoverImg="/icons/grade_a_care_hover.webp"
            label="Grade-A Care"
          />
          <IconWithLabel
            defaultImg="/icons/cryochemical_mastery.webp"
            hoverImg="/icons/cryochemical_mastery_hover.webp"
            label="Cryochemical Mastery"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
