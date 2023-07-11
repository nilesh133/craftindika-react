import React from 'react';
import './blogContent.css';
import { useNavigate } from "react-router-dom";

const BlogContent = ({ data, postLength, currentPost }) => {
  const navigate = useNavigate();
  return (
    <div className="blogContainer">
      <div>
        <h1 className="blogTitle">{data.title}</h1>
        <div className="blogIntroduction">
          <p>{data.introduction}</p>
        </div>
        {data.caseStudy && (
          <div className="blogSection">
            {data.caseStudy.map((caseStudyItem, caseIndex) => (
              <div key={caseIndex}>
                <h2>{caseStudyItem.heading}</h2>
                <p>{caseStudyItem.description}</p>
              </div>
            ))}
          </div>
        )}
        {data.conclusion && (
          <div className="blogConclusion">
            {data.conclusion.map((conclusionItem, conclusionIndex) => (
              <div key={conclusionIndex}>
                <h2>{conclusionItem.heading}</h2>
                <p>{conclusionItem.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="blogNavigation">
        {
          currentPost !== 1 &&
          <button className="navigationButton" onClick={()=>{
            navigate(`/partnership/blog?q=${parseInt(currentPost)-1}`);
          }}>
            &larr; Previous Post
          </button>
        }
        {
          currentPost !== postLength &&
          <button className="navigationButton" onClick={()=>{
            navigate(`/partnership/blog?q=${parseInt(currentPost)+1}`);
          }}>
            Next Post &rarr;
          </button>
        }
      </div>
    </div>
  );
}

export default BlogContent;
