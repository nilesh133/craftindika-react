import React from 'react'
import Hero from './Hero/Hero'
import Artisanal from './Artisanal/Artisanal'
import Mission from './Mission/Mission'
import Embark from './Embark/Embark'
import Certified from './Certified/Certified'
import Essence from './Essence/Essence'
import Testimonials from './Testimonials/Testimonials'
import Footer from '../Footer/Footer';
import Collection from '../Collection/Collection'
import Featured from './Featured/Featured'
import Showcase from './Showcase/Showcase'
import Process from './Process/Process'
import FAQComponent from '../FAQComponent/FAQComponent'

const LandingPage = () => {
  const faqCompHeading = {
    firstLine: "Introducing",
    secondLine: "CraftPartner Program"
  }
  return (
    <div>
        <Hero/>
        <Artisanal/> 
        <Featured/>
        <Collection/>
        <Essence/>
        <Mission/>
        <Testimonials/>
        <Process/>
        <Certified/>
        <Showcase/>
        <FAQComponent heading = {faqCompHeading}/>
        <Embark/>
        <Footer/>
    </div>
  )
}

export default LandingPage