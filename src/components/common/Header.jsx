import React, { useEffect } from 'react';
import Headroom from 'react-headroom';
import gsap from 'gsap';

const Header = () => {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

    gsap.to("#header", {
      scrollTrigger: {
        trigger: "#header",
        start: "15% top",
        scrub: true,
        // markers: true,
      },
     backgroundColor:"white"
    });
  })
  }, []);

  
  return (
    <div>
      <div id='header' className="absolute top-0 z-[99]   left-0 flex items-center justify-end w-full h-[10vh] ">
      <Headroom>
      <div id='header' className="w-full h-[10vh] z-[99]    flex items-center justify-end ">
        <div className="flex gap-10 font-semibold items-center  text-sm px-12 ">
        <p>Our Services</p>
        <p>Explore Fleet</p>
        <p className='px-3 rounded-lg py-1 bg-[#EA1B22] text-white'>Partner With Us</p>
        <p>Our Approach</p>
        <p>Our Edge</p>
        </div>
      </div>
      </Headroom>
      </div>
    </div>
  )
}

export default Header