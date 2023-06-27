import PartnershipHero from './Hero/PartnershipHero'
import PartnershipProgram from './Program/PartnershipProgram'
import PartnershipServices from './PartnershipServices/PartnershipServices'
import Packages from './Packages/Packages'
import Helps from './Helps/Helps'
import BecomeCraftPartner from './BecomeCraftPartner/BecomeCraftPartner'
import FAQComponent from './FAQComponent/FAQComponent'
import Footer from '../Footer/Footer'
import News from './News/News'
import Certificate from './Certificate/Certificate'


const Partnership = () => {
  const faqCompHeading = {
    firstLine: 'Frequently Asked',
    secondLine: "Questions"
  }
  return (
    <div>
      <PartnershipHero />
      <PartnershipProgram />
      <PartnershipServices />
      <News />
      <Packages />
      <Helps />
      <FAQComponent heading={faqCompHeading} />
      <Certificate />
      
      <BecomeCraftPartner />
      <Footer />
    </div>
  )
}

export default Partnership