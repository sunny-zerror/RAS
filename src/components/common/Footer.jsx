import { RiArrowDownSLine, RiInstagramLine, RiLinkedinLine, RiMailFill, RiMapPinFill, RiPhoneFill } from '@remixicon/react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [arr1activeIndex, setarr1ActiveIndex] = useState(null);
  const [arr2activeIndex, setarr2ActiveIndex] = useState(null);
  const [arr3activeIndex, setarr3ActiveIndex] = useState(null);

  const arr1 = [
    {
      title: "Goodrich Logistics Pvt. Ltd.",
      subTitle: ["Dhaka, Bangladesh"],
      link: ""
    },
    {
      title: "Goodrich Transport Solutions (UK) Ltd.",
      subTitle: ["West Sussex, UK"],
      link: ""
    },
    {
      title: "Goodrich Lanka Pvt Ltd",
      subTitle: ["Colombo, Sri Lanka"],
      link: ""
    },
    {
      title: "Goodrich Thailand Co. Ltd.",
      subTitle: ["Bangkok, Thailand"],
      link: ""
    },
    {
      title: "Vasco Global Maritime LLC",
      subTitle: ["Abu Dhabi, UAE", "Bur Dubai, UAE"],
      link: ""
    },
    {
      title: "Goodrich Maritime LLC",
      subTitle: ["Dubai, UAE (Westburry Office Tower)", "Dubai, UAE (Suite 209)"],
      link: ""
    },
  ]
  const arr2 = [
    {
      title: "Goodrich Central Asia LLP",
      subTitle: ["Almaty, Kazakhstan", "Tashkent, Uzbekistan"],
      link: ""
    },
    {
      title: "Goodrich International Freight Forwarder Co Ltd.",
      subTitle: ["Ningbo, China", "Shanghai, China"],
      link: ""
    },
    {
      title: "Goodrich Arabia Co.",
      subTitle: ["Dammam, Saudi Arabia", "Jeddah, Saudi Arabia"],
      link: ""
    },
    {
      title: "Goodrich Asia Pacific Sdn Bhd",
      subTitle: ["Penang, Malaysia", "Kuantan, Malaysia", "Johor, Malaysia", "Shah Alam, Malaysia"],
      link: ""
    },
    {
      title: "Goodrich Asia Pacific Pte Ltd.",
      subTitle: ["Singapore"],
      link: ""
    },

  ]
  const arr3 = [
    {
      title: "Goodrich Maritime Private Limited",
      subTitle: [
        "Tuticorin, Tamil Nadu",
        "Chennai, Tamil Nadu",
        "Mangaluru, Karnataka",
        "Bengaluru, Karnataka",
        "Secunderabad, Telangana",
        "Visakhapatnam, Andhra Pradesh",
        "Indore, Madhya Pradesh",
        "Kolkata, West Bengal",
        "Ludhiana, Punjab",
        "New Delhi",
        "Ahmedabad, Gujarat",
        "Amreli (Pipavav Port), Gujarat",
        "Vadodara, Gujarat",
        "Surat, Gujarat",
        "Gandhidham, Gujarat",
        "Nagpur, Maharashtra",
        "Mumbai, Maharashtra"
      ],
      link: ""
    },

  ]


  const arr1handleToggle = (index) => {
    setarr1ActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const arr2handleToggle = (index) => {
    setarr2ActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const arr3handleToggle = (index) => {
    setarr3ActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="w-full overflow-x-hidden  bg-[#222D37] md:text-xs  xl:text-base  pad ft">
        <div className=" pt-5 md:pt-10">
          <div className="w-full center">
            <img className='w-[35%] md:w-[8%]' src="/logos/RAS_logo_white.png" alt="" />
          </div>
          <div className="w-full md:h-[17vh]   mt-6 flex flex-col md:flex-row items-center justify-between md:border-b md:border-[#FFFFFF]">
            <div className="w-full md:w-[49.5%] h-full grid grid-cols-1 md:grid-cols-3  items-center  lg:pr-14 ">
              <div className=" md:h-[70%] max-[640px]:hidden flex flex-row md:flex-col  justify-between ">
                <a href="#home" className=''>
                  About Us
                </a>
                <a href="#our-services" className=''>
                  Our Services
                </a>
                <a href="#certifications" className=''>
                  Certifications
                </a>
              </div>
              <div className=" :mt-0 md:h-[70%] flex flex-col justify-between">
                <p className='max-[640px]:hidden'>Contact Us</p>
                <p className=' text-xs xl:text-sm flex items-center opacity-80 font-semibold md:font-normal gap-2 mt-2 md:mt-0 '> <RiPhoneFill size={15} /> +91 12345-12345</p>
                <p className=' text-xs xl:text-sm flex items-center opacity-80 font-semibold md:font-normal gap-2 my-2 md:my-0 '> <RiMailFill size={15} /> info@rascs.in</p>
              </div>

              <div className=" border-b md:border-none pb-5 md:pb-0 border-gray-500 w-full md:h-[70%] flex items-end opacity-80 font-semibold md:font-normal gap-2 mb-5 md:mb-0  text-xs xl:text-sm md:leading-tight">
                <div className="shrink-0 h-full text-white flex items-center  ">
                  <RiMapPinFill size={18} className='translate-y-[-8px]' />
                </div>
                <p className='text-xs xl:text-sm flex items-center gap-2'>
                  7th & 8th Floor, Meraki Area, Sion Trombay Rd.,Chembur (E), Mumbai 400071
                </p>
              </div>

            </div>
            <div className="w-[.5px] bg-[#FFFFFF] h-[70%] max-[600px]:hidden"></div>
            <div className="w-full md:w-[49.5%] h-full grid grid-cols-1 md:grid-cols-3  items-center  md:pl-5 lg:pl-14">
            <div className=" md:h-[70%] min-[640px]:hidden flex flex-col  justify-between ">
                <a href="#home" className=''>
                  About Us
                </a>
                <a href="#our-services" className=''>
                  Our Services
                </a>
                <a href="#certifications" className=''>
                  Certifications
                </a>
              </div>
              <div className="  mt-4 md:h-[70%] flex  flex-col justify-between ">
                <a href="" className=''>
                  Chemical Logistics
                </a>
                <a href="" className=''>
                  Liner / NVOCC
                </a>
                <a href="" className=''>
                  CIS
                </a>
              </div>
              <div className=" mt-4 md:mt-0 h-[70%] flex flex-col justify-between">
                <p>Global Freight Forwarding</p>
                <p>Logistics & Heavy Lifts</p>
                <p>OOG / ODC</p>
              </div>

              <div className="h-[70%] flex justify-end pr-2 gap-4 items-end">
                <RiInstagramLine className='text-white' />
                <RiLinkedinLine className='text-white' />
              </div>

            </div>
          </div>
          <div className="py-5 center w-full ">
            {/* <h6 className=' text-sm md:text-xl font-semibold text-[#DCF1F7]' >X of the Top 10 Chemical Manufacturers trust RAS</h6> */}
          </div>
          <div className="w-full   gap-10 md:gap-24 grid  grid-cols-1 md:grid-cols-3">
            <div className="w-full h-full">
              {arr1.map((item, index) => {
                const isOpen = arr1activeIndex === index

                return (
                  <div key={index} className="flex flex-col mb-3 md:mb-0   gap-2 md:gap-4 md:pb-10">
                    <div
                      className=" pb-1 md:pb-1 border-b border-gray-500 md:border-white flex justify-between items-center cursor-pointer"
                      onClick={() => arr1handleToggle(index)}
                    >
                      <a>{item.title}</a>
                      <RiArrowDownSLine
                        className={` md:hidden transition-transform duration-300 text-gray-300 md:text-white ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </div>
                    <div className=" hidden md:flex flex-col gap-2">
                      {
                        item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))
                      }
                    </div>
                    <div
                      className={`
                        md:hidden
                pl-4 overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? 'max-h-40 opacity-100 ' : 'max-h-0 opacity-0'}
              `}
                    >
                      <div className="flex text-sm opacity-80 flex-col gap-2">
                        {item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="w-full h-full">
              {arr2.map((item, index) => {
                const isOpen = arr2activeIndex === index

                return (
                  <div key={index} className="flex flex-col mb-3 md:mb-0   gap-2 md:gap-4 md:pb-10">
                    <div
                      className=" pb-1 md:pb-1 border-b border-gray-500 md:border-white flex justify-between items-center cursor-pointer"
                      onClick={() => arr2handleToggle(index)}
                    >
                      <a>{item.title}</a>
                      <RiArrowDownSLine
                        className={` md:hidden transition-transform duration-300 text-gray-300 md:text-white ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </div>
                    <div className=" hidden md:flex flex-col gap-2">
                      {
                        item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))
                      }
                    </div>
                    <div
                      className={`
                        md:hidden
                pl-4 overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? 'max-h-40 opacity-100 ' : 'max-h-0 opacity-0'}
              `}
                    >
                      <div className="flex text-sm opacity-80 flex-col gap-2">
                        {item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="w-full h-full pb-14 md:pb-0">
              {arr3.map((item, index) => {
                const isOpen = arr3activeIndex === index

                return (
                  <div key={index} className="flex flex-col mb-3 md:mb-0   gap-2 md:gap-4 md:pb-10">
                    <div
                      className=" pb-1 md:pb-1 border-b border-gray-500 md:border-white flex justify-between items-center cursor-pointer"
                      onClick={() => arr3handleToggle(index)}
                    >
                      <a>{item.title}</a>
                      <RiArrowDownSLine
                        className={` md:hidden transition-transform duration-300 text-gray-300 md:text-white ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </div>
                    <div className=" hidden md:flex flex-col gap-2">
                      {
                        item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))
                      }
                    </div>
                    <div  
                      className={`
                        md:hidden 
                pl-4 overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? 'max-h-full opacity-100 ' : 'max-h-0 opacity-0'}
              `}
                    >
                      <div className="flex text-sm opacity-80 flex-col gap-2">
                        {item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer