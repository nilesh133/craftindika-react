import React from 'react'
import PartnershipHero from './Hero/PartnershipHero'
import PartnershipProgram from './Program/PartnershipProgram'
import PartnershipServices from './PartnershipServices/PartnershipServices'
import Packages from './Packages/Packages'
import Helps from './Helps/Helps'
import BecomeCraftPartner from './BecomeCraftPartner/BecomeCraftPartner'
import FAQComponent from '../FAQComponent/FAQComponent'
import Footer from '../Footer/Footer'
import News from './News/News'

const Partnership = () => {
  const faqCompHeading = {
    firstLine : 'Frequently',
    secondLine: "Asked Questions"
  }
  return (
    <div>
      {/* <PartnershipHero/>
      <PartnershipProgram/>
      <PartnershipServices/>
      <News/>
      <Packages/> */}
      <Helps/>
      {/* <BecomeCraftPartner/>
      <FAQComponent heading={faqCompHeading}/>
      <Footer/> */}
    </div>
  )
}

export default Partnership