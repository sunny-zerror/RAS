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
  const [image, setImage] = useState(steps[0].image);
  const imageRef = useRef();

  useEffect(() => {
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const sections = gsap.utils.toArray("[id^=section_]");

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          onEnter: () => setImage(steps[index].image),
          onEnterBack: () => setImage(steps[index].image),
        });
      });

      // Pin and scroll the whole container
      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll_parent",
          start: "top top",
          scrub: 1,
          pin: true,
          end: "+=" + window.innerHeight * (sections.length),
          snap: 1 / (sections.length - 1),
          // markers: true,
        },
      });
      
      gsap.to(imageRef.current, {
        rotate: -360 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll_parent",
          start: "top top",
          scrub: 1,
          end: "+=" + window.innerHeight * (sections.length),
        },
      });
    });
  }, []);

  return (
    <div id="scroll_parent" className="relative my-20 pt-[4vh] h-screen  w-full text-white overflow-hidden">
      <p className="text-2xl min-[640px]:hidden font-semibold  text-center my-5">From Insight to Impact</p>
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Image Section */}
        <div className=" w-full md:w-[40%]  h-[50vh] md:h-screen sticky top-0 flex items-center justify-center">
          <img
            ref={imageRef}
            id="scroll_img"
            className=" w-[80%] md:w-[100%] md:translate-x-[-40%] md:translate-y-10"
            src={image}
            alt="Rotating Circle"
          />
        </div>

        {/* Sections */}
        <div className=" w-full  md:w-[60%] md:pt-5 h-[50vh] md:h-full relative">
          {steps.map((step, index) => (
            <div
              key={index}
              id={`section_${index}`}
              className="h-screen flex flex-col bg-white justify-center gap-10 p-10"
            >
              <div>
                <p className="text-3xl font-semibold text-black">{step.title}</p>
                <p className="text-xl mt-2 text-black">{step.subtitle}</p>
              </div>
              <p className="text-md w-[70%] leading-tight text-black">
                {step.description}
              </p>
              <BorderBtn text={step.button} link="#contact-form" width="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollServices;
