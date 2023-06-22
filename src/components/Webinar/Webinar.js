import React from 'react'
import WebinarHero from './WebinarHero/WebinarHero'
import WebinarEmbark from './WebinarEmbark/WebinarEmbark'
import WebinarCommon from './WebinarCommon/WebinarCommon'

// Images import
import webinar_common_image1 from "../../images/Webinar/WebinarCommon/webinar_common_image1.png";
import webinar_common_image2 from "../../images/Webinar/WebinarCommon/webinar_common_image2.png";
import webinar_common_image3 from "../../images/Webinar/WebinarCommon/webinar_common_image3.png";
import webinar_common_image4 from "../../images/Webinar/WebinarCommon/webinar_common_image4.png";
import WebinarStats from './WebinarStats/WebinarStats';
import WebinarBonus from './WebinarBonus/WebinarBonus';
import WebinarSchedule from './WebinarSchedule/WebinarSchedule';
import WebinarRegiter from './WebinarRegister/WebinarRegiter';
import Footer from "../Footer/Footer"
import WebinarAbout from './WebinarAbout/WebinarAbout';
const Webinar = () => {
  return (
    <div>
      <WebinarHero />
      <WebinarEmbark />
      <WebinarCommon data={{ image: webinar_common_image1, heading1: "LEARN", heading2: "Strategies and Techniques", paraLine1: "Learn the proven strategies and techniques used by successful handicraft", paraLine2: "entrepreneurs who support artisans and their craft", link: "Start Learning", isReverse: false }} />
      <WebinarCommon data={{ image: webinar_common_image2, heading1: "DISCOVER", heading2: "Lucrative Crafts market", paraLine1: "Discover the lucrative markets and niches within the handicraft industry,", paraLine2: "with a focus on indigenous art and cultural diversity", link: 'Start discovering', isReverse: true }} />
      <WebinarStats/>
      <WebinarCommon data={{ image: webinar_common_image3, heading1: "UNCOVER", heading2: "Effecting Marketing and Sales Tactics", paraLine1: "Uncover the most effective marketing and sales tactics for promoting authentic handicrafts and empowering", paraLine2: "artisans", link: 'Sign Up', isReverse: false }} />
      <WebinarCommon data={{ image: webinar_common_image4, heading1: "CREATE", heading2: "Positive Social Impact", paraLine1: "Get insider tips on managing your finances, scaling your business,", paraLine2: "and creating a positive social impact", link: 'Sign Up', isReverse: true }} />
      <WebinarBonus/>
      <WebinarAbout/>
      <WebinarSchedule/>
      <WebinarRegiter/>
      {/* <Footer/> */}
    </div>
  )
}

export default Webinar