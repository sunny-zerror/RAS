import { RiInstagramLine, RiLinkedinLine } from '@remixicon/react'
import React from 'react'

const Footer = () => {

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

  return (
    <div>
      <div className="w-full overflow-x-hidden  bg-[#222D37] text-base  pad ft">
        <div className=" pt-5 md:pt-10">
          <div className="w-full center">
            <img className='w-[40%] md:w-[12%]' src="/logos/footer logo.png" alt="" />
          </div>
          <div className="w-full md:h-[17vh]   mt-6 flex flex-col md:flex-row items-center justify-between md:border-b md:border-[#FFFFFF]">
            <div className="w-full md:w-[49.5%] h-full grid grid-cols-1 md:grid-cols-3  items-center pr-14 ">
              <div className=" md:h-[70%] flex flex-col justify-between ">
                <a href="" className=''>
                  About Us
                </a>
                <a href="" className=''>
                  Our Services
                </a>
                <a href="" className=''>
                  Certifications
                </a>
              </div>
              <div className=" md:h-[70%] flex flex-col justify-between">
                <p>Company Building Name</p>
                <p className='text-sm'>+91 12345-12345</p>
                <p className='text-sm'>info@rascs.in</p>
              </div>

              <div className="md:h-[70%] flex items-end text-sm md:leading-tight">
                <p>
                  7th & 8th Floor, Meraki Area, Sion Trombay Rd.,Chembur (E), Mumbai 400071
                </p>
              </div>

            </div>
            <div className="w-[.5px] bg-[#FFFFFF] h-[70%] max-[600px]:hidden"></div>
            <div className="w-full md:w-[49.5%] h-full grid grid-cols-1 md:grid-cols-3  items-center  md:pl-14">
              <div className=" md:h-[70%] flex flex-col justify-between ">
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
              <div className=" h-[70%] flex flex-col justify-between">
                <p>Global Freight Forwarding</p>
                <p>Logistics & Heavy Lifts</p>
                <p>OOG / ODC</p>
              </div>

              <div className="h-[70%] flex flex-col justify-end pr-2 gap-4 items-end">
                <RiInstagramLine className='text-white' />
                <RiLinkedinLine className='text-white' />
              </div>

            </div>
          </div>
          <div className="py-10 center w-full ">
            <p className=' text-sm md:text-xl font-semibold text-[#DCF1F7]' >X of the Top 10 Chemical Manufacturers trust RASSCS</p>
          </div>
          <div className="w-full   gap-10 md:gap-24 grid  grid-cols-1 md:grid-cols-3">
            <div className="w-full h-full">
              {
                arr1.map((item, index) => (
                  <div key={index} className="flex md:pb-10 flex-col gap-4">
                    <div className="pb-1 border-b border-[#FFFFFF]">
                      <a>{item.title}</a>
                    </div>
                    <div className="flex flex-col gap-2">
                      {
                        item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="w-full h-full">
              {
                arr2.map((item, index) => (
                  <div key={index} className="flex pb-10 flex-col gap-4">
                    <div className="pb-1 border-b border-[#FFFFFF]">
                      <a>{item.title}</a>
                    </div>
                    <div className="flex flex-col gap-2">
                      {
                        item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="w-full h-full">
              {
                arr3.map((item, index) => (
                  <div key={index} className="flex pb-10 flex-col gap-4">
                    <div className="pb-1 border-b border-[#FFFFFF]">
                      <a>{item.title}</a>
                    </div>
                    <div className="flex flex-col gap-2">
                      {
                        item.subTitle.map((subItem, subIndex) => (
                          <a key={subIndex}>{subItem}</a>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer