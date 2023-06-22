import React from 'react'
import "./mission.css"

const Mission = () => {
    return (
        <div className='mission'>
            <div className='mission_heading'>
                <p>MISSION</p>
                <h3>Preserve, Enrich & Deliver Masterpieces</h3>
            </div>
            <div className='mission_stats'>
                <div className='mission_stats_single'>
                    <div className='mission_stats_single_circle'>
                        1000+
                    </div>
                    <h3>Products</h3>
                    <p>Active and Listed</p>
                </div>
                <div className='mission_stats_single'>
                    <div className='mission_stats_single_circle'>
                        500+
                    </div>
                    <h3>Sells</h3>
                    <p>Sold and Supported</p>
                </div>
                <div className='mission_stats_single'>
                    <div className='mission_stats_single_circle'>
                        5+
                    </div>
                    <h3>Countries</h3>
                    <p>Served and Growing</p>
                </div>
            </div>
        </div>
    )
}

export default Mission

// import "./styles.css";
// import { useState, useRef, useEffect } from "react";

// const App = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [number, setNumber] = useState(0);
//   const sectionRef = useRef(null);
//   const sectionHeight = sectionRef.current?.offsetHeight || 0;
//   const windowHeight = window.innerHeight;
//   const startValue = 0;
//   const endValue = 100;
//   const duration = 1000;
//   let startTime = null;

//   useEffect(() => {
//     const handleScroll = () => {
//       const sectionTop = sectionRef.current?.offsetTop || 0;
//       const scrollY = window.scrollY;
//       const isSectionVisible =
//         scrollY > sectionTop - windowHeight + sectionHeight / 2;

//       setIsVisible(isSectionVisible);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [sectionHeight, windowHeight]);

//   useEffect(() => {
//     if (isVisible) {
//       const step = (timestamp) => {
//         if (!startTime) startTime = timestamp;
//         const elapsedTime = timestamp - startTime;
//         const progress = Math.min(elapsedTime / duration, 1);
//         const currentValue = Math.round(
//           progress * (endValue - startValue) + startValue
//         );

//         setNumber(currentValue);

//         if (elapsedTime < duration) {
//           requestAnimationFrame(step);
//         } else {
//           startTime = null;
//         }
//       };

//       requestAnimationFrame(step);
//     } else {
//       setNumber(startValue);
//       startTime = null;
//     }
//   }, [isVisible, startValue, endValue, duration]);

//   return (
//     <>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>
//       <p>HEllo</p>

//       <div
//         className={`number-div ${isVisible ? "visible" : ""}`}
//         ref={sectionRef}
//       >
//         {number}
//       </div>
//     </>
//   );
// };

// export default App;
