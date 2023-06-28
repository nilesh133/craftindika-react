import React from "react";
import { useLocation } from "react-router-dom";
import BlogHero from "./BlogHero";
import Footer from "../../Footer/Footer";
import BlogContent from "./BlogContent";

const Blogs = () => {
  const {state} = useLocation();
  // const data = new URLSearchParams(location.search).get("message");
  console.log(state);
  return(
    <div>
      {/* navabar */}
      <BlogHero heroImg = {state.heroImg} heading = {state.heading}/>
      <BlogContent title = {state.title} introduction = {state.introduction} caseStudy = {state.caseStudy} conclusion = {state.conclusion}/>
      <Footer/>
    </div>
  );
};

export default Blogs;
