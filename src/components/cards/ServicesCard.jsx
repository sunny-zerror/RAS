import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ServicesCard = ({ title, description, buttons, category }) => {
  const cardRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!category || !categoryRef.current) return;

    const catEl = categoryRef.current;

    const handleMouseEnter = () => {
      gsap.to(catEl, {
        height: "auto",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        display: "flex"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(catEl, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => gsap.set(catEl, { display: "none" })
      });
    };

    cardEl.addEventListener('mouseenter', handleMouseEnter);
    cardEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardEl.removeEventListener('mouseenter', handleMouseEnter);
      cardEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [category]);

  return (
    <div>
      <div
        ref={cardRef}
        className="w-full min-h-[25vh] flex flex-col overflow-hidden rounded-lg border-black border p-5 hover:border-transparent hover:bg-[#EA1B22] group transition-all duration-700"
      >
        <p className='text-sm md:text-lg font-semibold mb-2 group-hover:text-white'>{title}</p>
        <p className='text-xs md:text-sm leading-tight group-hover:text-white'>{description}</p>

        {/* Static Buttons */}
        <div className="w-full mt-5 grid grid-cols-2 gap-5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-1000">
          {buttons.map((btn, idx) => (
            <button key={idx} className='border-2 text-xs md:text-sm cursor-default border-white text-white px-4 py-2 rounded-md'>
              {btn}
            </button>
          ))}
        </div>

        {/* Animated Categories */}
        {category && (
          <div
            ref={categoryRef}
            className="flex-col mt-5 gap-4 overflow-hidden opacity-0"
            style={{ height: 0, display: 'none' }}
          >
            {category.map((item, index) => (
              <div key={index}>
                <p className='text-xs md:text-sm leading-tight text-white mb-1'>{item.title}</p>
                <div className="w-full grid grid-cols-2 gap-5">
                  {item.btn.map((btn, idx) => (
                    <button key={idx} className='border-2 text-xs md:text-sm cursor-default border-white text-white px-4 py-2 rounded-md'>
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesCard;
