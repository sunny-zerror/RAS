import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BorderBtn from "../buttons/BorderBtn";

const steps = [
  {
    title: "Initial Inquiry",
    subtitle: "Establishing the first point of contact",
    description:
      "At this stage, RAS works with you to understand your supply chain goals and operational needs, setting the stage for a structured and solution-oriented collaboration.",
    button: "Send Inquiry",
    image: "/images/services/circle1.png",
  },
  {
    title: "Solution Design & Proposal",
    subtitle: "Shaping a plan around your needs",
    description:
      "RAS identifies key priorities, evaluates operational requirements, & outlines a clear, tailored solution. The goal is to align capabilities with your objectives & build a roadmap that’s ready for implementation.",
    button: "Book Consultancy",
    image: "/images/services/circle2.png",
  },
  {
    title: "Agreement & Onboarding",
    subtitle: "Seamless setup, built on trust and transparency",
    description:
      "Once aligned, RAS manages documentation, compliance checks, and onboarding processes—ensuring clarity, alignment, and readiness before execution begins.",
    button: "Start Onboarding",
    image: "/images/services/circle3.png",
  },
  {
    title: "Operations & Execution",
    subtitle: "Precision-driven logistics in motion",
    description:
      "This is where plans turn into action. RAS executes logistics operations with precision—ensuring safe, compliant, and timely cargo movement across touchpoints.",
    button: "Track Progress",
    image: "/images/services/circle4.png",
  },
  {
    title: "Delivery & Support",
    subtitle: "Reliable delivery, ongoing care",
    description:
      "Cargo is delivered as promised, with continued support for documentation, compliance, and incident response. RAS remains an active partner post-delivery.",
    button: "Request Support",
    image: "/images/services/circle5.png",
  },
  {
    title: "Continuous Improvement",
    subtitle: "Learning, refining, and growing with every move",
    description:
      "RAS actively gathers feedback, provides training, and identifies opportunities to refine logistics processes—building stronger, smarter supply chains together.",
    button: "Share Feedback",
    image: "/images/services/circle6.png",
  },
];

const ScrollServices = () => {
  const [currentImage, setCurrentImage] = useState(steps[0].image);
  const sectionsRef = useRef([]);

  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
  
      // Image swap based on section
      sectionsRef.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentImage(steps[index].image),
          onEnterBack: () => setCurrentImage(steps[index].image),
        });
      });
  
      // Total scrollable area
      const totalScrollLength = sectionsRef.current.length;
      
      // Smooth rotation over all sections
      gsap.to("#scroll_img", {
        rotation: -360 * (totalScrollLength - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll_parent",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true, // remove in prod
        },
      });
    });
  }, []);
  
  
  
  

  return (
    <div id="scroll_parent" className="relative my-20 w-full text-white">
      <div className="w-full h-full flex">
        {/* Left column with the image */}
        <div className="w-[40%] h-screen sticky top-0 flex items-center justify-center">
          <img
            id="scroll_img"
            className="w-[100%] translate-x-[-40%] translate-y-10"
            src={currentImage}
            alt="Rotating Circle"
          />
        </div>

        {/* Right column with scrollable pinned sections */}
        <div className="w-[60%]  flex flex-col relative">
          
          {steps.map((step, index) => (
            <section
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`h-screen  flex flex-col bg-white justify-center gap-10 `}
            >
              <div className="">

              <p className="text-3xl font-semibold ">{step.title}</p>
              <p className="text-xl mt-2 ">{step.subtitle}</p>
              </div>
              <p className="text-md w-[70%] leading-tight ">{step.description}</p>
              <BorderBtn text={step.button} link={"#contact-form"} width="100%" />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollServices;
