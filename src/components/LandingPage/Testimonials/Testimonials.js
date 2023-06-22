import React, { useEffect, useState } from 'react';
import "./testimonials.css"

// Icons import
import {ImQuotesLeft} from "react-icons/im"

const Testimonials = () => {
    const [currTestimonial, setCurrTestimonial] = useState(3);

    const testimonialsData = [
        {
            userFeedback: "“CraftIndika is a treasure trove of authentic Indian handicrafts, their collection showcases the rich heritage of our country with utmost finesse.”",
            userImage: "https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            userName: "Asha Patel",
            userProfile: "Indian Customer"
        },
        {
            userFeedback: "“As a collector of global art, CraftIndika has impressed me with their diverse range of handcrafted treasures, bringing a touch of culture to my home.”",
            userImage: "https://images.unsplash.com/photo-1613309440822-38f3fb0d5477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            userName: "John Anderson",
            userProfile: "USA Customer"
        },
        {
            userFeedback: "“The attention to detail and craftsmanship displayed in the products I received from CraftIndika truly reflect their commitment to quality and authenticity.”",
            userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            userName: "Sophie Turner",
            userProfile: "UK Customer"
        },
        {
            userFeedback: "“CraftIndika's remarkable collection of handcrafted pieces has added a touch of elegance to my interior decor, a true celebration of artistry and culture.”",
            userImage: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            userName: "Ali Hassan",
            userProfile: "UAE Customer"
        },
        {
            userFeedback: "“CraftIndika has exceeded my expectations with their exceptional selection of traditional handicrafts, each piece tells a unique story and adds character to my living space.”",
            userImage: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            userName: "Eva Müller",
            userProfile: "German Customer"
        }
    ]

    useEffect(() => {
        const timeOut = setTimeout(() => {
          setCurrTestimonial((currTestimonial + 1) % 4)
        }, 4000)
    
        return () => clearTimeout(timeOut)
      }, [currTestimonial])

  return (
    <div className='testimonials'>
        <div className='testimonials_quoteicon'>
            <ImQuotesLeft/>
        </div>
        <div className='testimonials_feedback'>
            {testimonialsData[currTestimonial].userFeedback}
        </div>
        <div className='testimonials_userdetails'>
            <img src = {testimonialsData[currTestimonial].userImage}/>
            <div className='testimonials_userDetails_right'>
                <p>{testimonialsData[currTestimonial].userName}</p>
                <p>{testimonialsData[currTestimonial].userProfile}</p>
            </div>
        </div>
        <div className='testimonials_pagination'>
            {
                testimonialsData.map((data, i) => (
                    <p  onClick={() =>
                        setCurrTestimonial((i))
                      } className={i === currTestimonial ? "testimonials_pagination_active" : "testimonials_pagination_notactive"}>0{i + 1}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials