import React, { useState } from 'react'
import Section1 from '../sections/Section1'
import Section2 from '../sections/Section2'
import HowRas from '../sections/HowRas'
import OurStrength from '../sections/OurStrength'

const Hero = () => {


  return (
    <div>
      <Section1/>
      <Section2/>
      <HowRas/>
      <OurStrength/>
    </div>
  )
}

export default Hero