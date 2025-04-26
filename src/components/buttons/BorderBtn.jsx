import React, { useRef, useEffect } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import gsap from 'gsap';

const BorderBtn = ({ text, link, width }) => {
    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const textBox = textRef.current;
        const arrowBox = arrowRef.current;

        const tl = gsap.timeline({ paused: true });

        tl.to(textBox, {
            x: '100%',
            duration: 0.3,
            ease: 'power3.inOut'
        }, 0).fromTo(arrowBox, {
            x: '-100%',
            opacity: 0
        }, {
            x: '0%',
            opacity: 1,
            duration: 0.3,
            ease: 'power3.inOut'
        }, 0);

        wrapper.addEventListener('mouseenter', () => tl.play());
        wrapper.addEventListener('mouseleave', () => tl.reverse());

        return () => {
            wrapper.removeEventListener('mouseenter', () => tl.play());
            wrapper.removeEventListener('mouseleave', () => tl.reverse());
        };
    }, []);

    return (
        <div>
            <div className="w-full h-full flex items-center ">
                <a href={link ?? "#contact-form"} className=' h-10  max-[640px]:hidden  inline-block whitespace-nowrap'>
                    <div
                        ref={wrapperRef}
                        style={{ width: width || '100%' }}
                        className={`relative h-10 border-2 border-[#EA1B22] flex overflow-hidden rounded-lg cursor-pointer`}
                    >

                        <div
                            ref={arrowRef}
                            style={{ width: width || '100%' }}
                            className={`absolute left-0  top-0 h-full flex items-center justify-center px-2   text-[#EA1B22] text-xl z-10`}

                        >
                            <RiArrowRightLine />
                        </div>

                        <div
                            ref={textRef}
                            style={{ width: width || '100%' }}
                            className={`absolute left-0  top-0 h-full   border-[#EA1B22] flex items-center justify-center font-medium text-[#EA1B22] text-sm md:text-base`}

                        >
                            {text}
                        </div>
                    </div>
                    <p className='opacity-0 px-1 md:px-5'>
                        {text}
                    </p>
                </a>
                <a href={link ?? "#contact-form"} className=' h-10 min-[640px]:hidden    inline-block whitespace-nowrap'>
                    <div

                        className={` w-${width} px-6 rounded-lg  h-full border-2  border-[#EA1B22] flex items-center justify-center font-medium text-[#EA1B22] text-sm md:text-base`}

                    >
                        {text}
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BorderBtn;
