import React, { useState } from 'react'
import Section1 from '../sections/Section1'
import Section2 from '../sections/Section2'
import HowRas from '../sections/HowRas'
import OurStrength from '../sections/OurStrength'
import Stories from '../sections/Stories'
import Certifications from '../sections/Certifications'
import Tanks from '../sections/Tanks'
import OurServices from '../sections/OurServices'
import ContactSection from '../sections/ContactSection'

const Hero = () => {


  return (
    <div>
      <Section1/>
      <Section2/>
      <HowRas/>
      <OurStrength/>
      <OurServices/>
      <Stories/>
      <Tanks/>
      <Certifications/>
      <ContactSection/>
    </div>
  )
}

export default Hero