import React, { useState, useEffect } from 'react';
import './blogContent.css';

import image1 from '../../../images/Partnership/Program/1.webp';
import image2 from '../../../images/Partnership/Program/2.webp';
import image3 from '../../../images/Partnership/Program/3.webp';

const BlogContent = ({ data }) => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupHeading, setPopupHeading] = useState('');
  const [randomImages, setRandomImages] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const images = [image1, image2, image3];
    const shuffledImages = shuffleArray(images).slice(0, 3);
    setRandomImages(shuffledImages);
  }, []);

  const openPopup = (heading, content) => {
    setPopupHeading(heading);
    setPopupContent(content);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupHeading('');
    setPopupContent(null);
    setPopupOpen(false);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="blogContainer">
      <div className={`blogOverlay ${isPopupOpen ? 'active' : ''}`} onClick={closePopup} />
      <div>
        <h1 className="blogTitle">{data.title}</h1>
        <div className="blogIntroduction">
          <p>{data.introduction}</p>
        </div>
        {data.caseStudy && (
          <div className="blogSection">
            {data.caseStudy.map((caseStudyItem, caseIndex) => (
              <div
                key={caseIndex}
                className="case-study-card"
                onClick={() =>
                  openPopup(caseStudyItem.heading, caseStudyItem.description)
                }>
                <h2>{caseStudyItem.heading}</h2>
                <p>
                  {caseStudyItem.description.slice(0, 200)}...{' '}
                  <a href="">Read More &gt;&gt;</a>
                </p>
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
        {randomImages.length > 0 && (
          <div className="random-images">
            {randomImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Random Image ${index + 1}`}
                className="random-image"
              />
            ))}
          </div>
        )}
      </div>
      {popupContent && (
        <div className="blogPopup">
          <div className="popup-content">
            <div onClick={closePopup} className="blogPopup-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M19.78 6.36l-1.42-1.42L12 10.59 5.64 4.24 4.22 5.66 10.59 12l-6.36 6.36 1.42 1.42L12 13.41l6.36 6.36 1.42-1.42L13.41 12l6.37-6.36z" />
              </svg>
            </div>
            <h2>{popupHeading}</h2>
            <p>{popupContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
