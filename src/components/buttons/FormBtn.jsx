import React, { useRef, useEffect } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import gsap from 'gsap';

const FormBtn = ({ text, width = "224px" }) => { // Default to 224px (w-56)
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
            <a href="#contactSection" className=' h-10 w-full   inline-block whitespace-nowrap'>
                <div
                    ref={wrapperRef}
                    className={`relative h-10 w-full border-2 border-[#EA1B22] overflow-hidden rounded-lg cursor-pointer`}
                >
                    <div
                        ref={arrowRef}
                        className={`absolute left-0 w-full top-0 gap-3 h-full flex items-center justify-center font-medium  text-sm md:text-base px-4 text-[#EA1B22]  z-10`}

                    >
                        <p className='text-[#EA1B22] font-semibold'>Submit Details</p>
                        <RiArrowRightLine />
                    </div>

                    <div
                        ref={textRef}
                        className={`absolute left-0 w-full top-0 h-full bg-[#EA1B22] flex items-center justify-center font-medium text-white text-sm md:text-base`}

                    >
                        {text}
                    </div>
                </div>
                <p className='opacity-0 px-5'>
                    {text}
                </p>
            </a>
        </div>
    );
};

export default FormBtn;
