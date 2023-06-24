import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components import
import TermsandConditions from './components/Policies/TermsandConditions';
import PrivacyPolicy from './components/Policies/PrivacyPolicy';
import ShippingPolicy from './components/Policies/ShippingPolicy';
import ReturnandRefundPolicy from './components/Policies/ReturnandRefundPolicy';
import Disclaimer from './components/Policies/Disclaimer';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import LandingPage from './components/LandingPage/LandingPage';
import Partnership from './components/Partnership/Partnership';
import Webinar from './components/Webinar/Webinar';
import Blogs from './components/Partnership/Blogs';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/partnership" exact element={<Partnership />} />
          <Route path="/webinar" exact element={<Webinar />} />
          <Route path="/terms-conditions" exact element={<TermsandConditions />} />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" exact element={<ShippingPolicy />} />
          <Route path="/return-and-refund-policy" exact element={<ReturnandRefundPolicy/>} />
          <Route path="/disclaimer" exact element={<Disclaimer/>} />
          <Route path="/contact-us" exact element={<ContactUs/>} />
          <Route path="/about-us" exact element={<AboutUs/>} />
          <Route path="/blog" exact element={<Blogs/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

// import "./styles.css";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [allData, setAllData] = useState([
//     {
//       id: "101",
//       role: "user",
//       content: "Hello",
//       checked: false
//     },
//     {
//       id: "102",
//       role: "assistant",
//       content: [
//         {
//           id: "103",
//           contentData: "Hi how are you",
//           checked: false
//         },
//         {
//           id: "104",
//           contentData: "Hi tell me something",
//           checked: false
//         }
//       ]
//     },
//     {
//       role: "user",
//       id: "105",
//       content: "tell me something",
//       checked: false
//     },
//     {
//       id: "106",
//       role: "assistant",
//       content: [
//         {
//           id: "107",
//           contentData: "Today is Sunday",
//           checked: false
//         }
//       ]
//     }
//   ]);

//   const handleCheck = (dataId, contId) => {
//     if (contId === null) {
//       setAllData(
//         allData.map((data) => {
//           if (data.id === dataId) {
//             return {
//               ...data,
//               checked: !data.checked
//             };
//           } else {
//             return data;
//           }
//         })
//       );
//     } else {
//       setAllData(
//         allData.map((data) => {
//           if (data.id === dataId) {
//             let temp = data.content.map((cont) => {
//               if (cont.id === contId) {
//                 return { ...cont, checked: !cont.checked };
//               } else {
//                 return cont;
//               }
//             });
//             return { ...data, content: temp };
//           } else {
//             return data;
//           }
//         })
//       );
//     }
//   };

//   const deleteChatConversation = () => {
//     setAllData(
//       allData.map((data) => {
//         if (data.role === "user") {
//           if (!data.checked) {
//             return data;
//           }
//           else {
//             return null;
//           }
//         } else {
//           let temp = data.content.filter((cont) => {
//             return !cont.checked;
//           });
//           return { ...data, content: temp };
//         }
//       })
//     );
//   };

//   useEffect(() => {
//     console.log(allData);
//   }, [allData]);

//   return (
//     <div>
//       {allData.map((data, i) =>
//         data?.role === "user" ? (
//           <div
//             onClick={() => handleCheck(data.id, null)}
//             style={{
//               color: "red",
//               marginBottom: "1.5rem",
//               background: data.checked ? "rgba(0, 0, 0, 0.3)" : "transparent"
//             }}
//           >
//             {data.content}
//           </div>
//         ) : (
//           <>
//             {data?.content?.map((cont) => (
//               <div
//                 onClick={() => handleCheck(data.id, cont.id)}
//                 style={{
//                   color: "green",
//                   marginBottom: "1rem",
//                   background: data.checked
//                     ? "rgba(0, 0, 0, 0.3)"
//                     : "transparent"
//                 }}
//               >
//                 {cont.contentData}
//               </div>
//             ))}
//           </>
//         )
//       )}
//       <button onClick={() => deleteChatConversation()}>Delete</button>
//     </div>
//   );
// }
