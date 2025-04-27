import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BorderBtn from "../buttons/BorderBtn";

const desktopSteps = [
  {
    title: "Initial Inquiry",
    subtitle: "Establishing the first point of contact",
    description:
      "At this stage, RAS works with you to understand your supply chain goals and operational needs, setting the stage for a structured and solution-oriented collaboration.",
    button: "Send Inquiry",
    image: "/images/services/our_service_new_1.webp",
  },
  {
    title: "Solution Design & Proposal",
    subtitle: "Shaping a plan around your needs",
    description:
      "RAS identifies key priorities, evaluates operational requirements, & outlines a clear, tailored solution. The goal is to align capabilities with your objectives & build a roadmap that’s ready for implementation.",
    button: "Book Consultancy",
    image: "/images/services/our_service_new_2.webp",
  },
  {
    title: "Agreement & Onboarding",
    subtitle: "Seamless setup, built on trust and transparency",
    description:
      "Once aligned, RAS manages documentation, compliance checks, and onboarding processes—ensuring clarity, alignment, and readiness before execution begins.",
    button: "Start Onboarding",
    image: "/images/services/our_service_new_3.webp",
  },
  {
    title: "Operations & Execution",
    subtitle: "Precision-driven logistics in motion",
    description:
      "This is where plans turn into action. RAS executes logistics operations with precision—ensuring safe, compliant, and timely cargo movement across touchpoints.",
    button: "Track Progress",
    image: "/images/services/our_service_new_4.webp",
  },
  {
    title: "Delivery & Support",
    subtitle: "Reliable delivery, ongoing care",
    description:
      "Cargo is delivered as promised, with continued support for documentation, compliance, and incident response. RAS remains an active partner post-delivery.",
    button: "Request Support",
    image: "/images/services/our_service_new_5.webp",
  },
  {
    title: "Continuous Improvement",
    subtitle: "Learning, refining, and growing with every move",
    description:
      "RAS actively gathers feedback, provides training, and identifies opportunities to refine logistics processes—building stronger, smarter supply chains together.",
    button: "Share Feedback",
    image: "/images/services/our_service_new_6.webp",
  },
];

const mobileSteps = desktopSteps.map((step, index) => ({
  ...step,
  image: `/images/services/our_service_new_${index + 1}.webp`,
}));

const ScrollServices = () => {
  const [steps, setSteps] = useState(desktopSteps);
  const [image, setImage] = useState(desktopSteps[0].image);
  const imageRef = useRef();

  useEffect(() => {
    const isMobile = window.innerWidth <= 640;
    const stepList = isMobile ? mobileSteps : desktopSteps;
    setSteps(stepList);
    setImage(stepList[0].image);

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const sections = gsap.utils.toArray("[id^=section_]");

      // 💬 Animate sections moving up
      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#our-services",
          start: "top top",
          end: "+=" + window.innerHeight * sections.length,
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          // markers: true,
        },
      });

      // 💬 Rotate and change image
      ScrollTrigger.create({
        trigger: "#our-services",
        start: "top top",
        end: "+=" + window.innerHeight * sections.length,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentStep = Math.floor(progress * sections.length);
          const clampedStep = Math.min(currentStep, sections.length - 1);
          setImage(stepList[clampedStep].image);

          if (imageRef.current) {
            const totalRotation = 300 ;
            imageRef.current.style.transform = `rotate(${totalRotation * progress}deg)`;
          }
        },
      });

    });
  }, []);
  




  return (
    <div id="our-services" className="relative my-20 pt-[7vh] md:pt-0 h-screen w-full text-white overflow-hidden">
      <p className="text-2xl min-[640px]:hidden font-semibold text-center my-4">From Insight to Impact</p>
      <div className="absolute w-full  max-[640px]:hidden font-semibold top-0 h-[25vh] items-end justify-end flex z-[9]">
        <div className="w-[60%] h-full flex items-end bg-white">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">From Insight to Impact</h1>
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row justify-between">
        {/* Image Section */}
        <div className="w-full md:w-[40%] h-[40vh] md:h-screen sticky top-0 flex items-center justify-center">
          <div className=" w-full center  md:translate-y-10">
            <img
              ref={imageRef}
              id="scroll_img"
              className="w-[60%] md:w-[80%] "
              src={image}
              alt="Rotating Circle"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="h-[50vh] overflow-hidden md:h-full w-full md:w-[60%]">
          <div className="w-full md:pt-10 h-full relative">
            {steps.map((step, index) => (
              <div
                key={index}
                id={`section_${index}`}
                className="h-full flex flex-col bg-white md:justify-center gap-5 md:gap-10 pad md:p-0"
              >
                <div>
                  <p className="text-xl md:text-3xl font-semibold">{step.title}</p>
                  <p className="text-base md:text-xl mt-2 leading-tight">{step.subtitle}</p>
                </div>
                <p className="text-sm md:text-base w-full md:w-[70%] leading-tight">
                  {step.description}
                </p>
                <BorderBtn text={step.button} link="#contact-form" width="100%" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollServices;
