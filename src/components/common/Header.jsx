import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useEffect, useState } from 'react';

const navItems = [
  { title: "Home", link: "#home", id: "home" },
  { title: "Our Approach", link: "#our-approach", id: "our-approach" },
  { title: "Our Edge", link: "#our-edge", id: "our-edge" },
  { title: "Our Services", link: "#our-services", id: "our-services" },
  { title: "Explore Fleet", link: "#our-fleet", id: "our-fleet" },
  { title: "Partner With Us", link: "#contact-form", id: "contact-form" },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionVisibility = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionVisibility[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        // Find the section with the highest intersection ratio
        const mostVisible = Object.entries(sectionVisibility).reduce(
          (max, [id, ratio]) => (ratio > max.ratio ? { id, ratio } : max),
          { id: "", ratio: 0 }
        );

        setActiveSection(mostVisible.id);
      },
      { threshold: [0.2, 0.4, 0.6, 0.8, 1] } // more fine-grained tracking
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);



  return (
    <div>
      <div id='header' className="w-full fixed top-0 left-0 h-[7vh] md:h-[10vh] z-[99] px-6 md:px-6 lg:px-20 flex items-center justify-between bg-white">
        <div className="w-[20%]">
          <a href="#home">
            <img className='w-[80%] md:w-[50%] lg:w-[30%]' src="/logos/ras_logo.png" alt="Logo" />
          </a>
        </div>

        <div className="hidden md:flex gap-10 font-semibold items-center text-sm">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`h-5 flex flex-col overflow-hidden whitespace-nowrap w-fit group ${item.title === "Home" ? "opacity-0 pointer-events-none" : ""
                }`}
            >
              <a
                href={item.link}
                className={`duration-200 cursor-pointer group-hover:-translate-y-5 ${activeSection === item.id ? "text-[#EA1B22]" : ""
                  }`}
              >
                {item.title}
              </a>
              <a
                href={item.link}
                className={`duration-200 cursor-pointer text-[#EA1B22] group-hover:-translate-y-5 ${activeSection === item.id ? "text-[#EA1B22]" : ""
                  }`}
              >
                {item.title}
              </a>
            </div>
          ))}

        </div>

        <div onClick={() => setNavOpen(true)} className="h-full center md:hidden">
          <RiMenu2Line />
        </div>

        <div className={`w-full fixed left-0 bg-white p-5 transition-all duration-500 ease-in-out z-40 ${navOpen ? 'top-0' : '-top-96'}`}>
          {navItems.map((item, index) => (
            <div key={index} className="w-fit py-1 flex items-center">
              <div className="h-full text-2xl flex flex-col overflow-hidden whitespace-nowrap w-fit group">
                <a
                  onClick={() => setNavOpen(false)}
                  href={item.link}
                  className={activeSection === item.id ? 'text-[#EA1B22]' : ''}
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
          <div onClick={() => setNavOpen(false)} className="absolute top-5 right-5">
            <RiCloseLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
