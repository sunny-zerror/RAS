import React from 'react';

const Certifications = () => {
  const logos = Array.from({ length: 10 }, (_, i) => `/logos/ras_logo_${i + 1}.jpg`);

  return (
    <div>
      <div id='certifications' className="w-full  flex flex-col  gap-5 md:gap-16 pad ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Certification and Affiliations</h1>
        <div className="w-full  gap-5 md:gap-10 grid grid-cols-3 md:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={index} className="w-full h-full flex items-center justify-center">
              <img className="w-[70%] object-contain hover:scale-110 duration-200 " src={logo} alt={`RAS Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
