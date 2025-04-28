import React, { useRef, useState } from 'react'
import Section1 from '../sections/Section1'
import Section2 from '../sections/Section2'
import HowRas from '../sections/HowRas'
import OurStrength from '../sections/OurStrength'
import Stories from '../sections/Stories'
import Certifications from '../sections/Certifications'
import Tanks from '../sections/Tanks'
import OurServices from '../sections/OurServices'
import ContactSection from '../sections/ContactSection'
import Section2New from '../sections/Section2New'
import ScrollServices from '../sections/ScrollServices'
import { tankData } from '../../utils/Data/TanksData'

const Hero = () => {

  const [selectedTank, setSelectedTank] = useState(tankData[0]);
  const fleetRef = useRef(null);

  const handleSelectTank = (tankLabel) => {
    switch (tankLabel) {
      case "Chemical":
      case "Food Grade":
        setSelectedTank(tankData[0]); // ISO Tanks
        break;
      case "Specialance Specialty":
        setSelectedTank(tankData[5]); // T75 Tanks (Cryogenic specialty)
        break;
      default:
        setSelectedTank(tankData[0]); // Default fallback
    }
    fleetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  


  return (
    <div>
      <Section1/>
      <Section2New/>
      {/* <Section2/> */}
      <HowRas/>
      <OurStrength onSelectTank={handleSelectTank} />
      <ScrollServices/>
      {/* <OurServices/> */}
      {/* <Stories/> */}
      <div ref={fleetRef}>
        <Tanks selectedTank={selectedTank} setSelectedTank={setSelectedTank} />
      </div>
      <Certifications/>
      <ContactSection/>
    </div>
  )
}

export default Hero