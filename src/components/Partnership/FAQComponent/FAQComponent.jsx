import React, { useState } from 'react';
import './faqcomponent.css';
import data from './Data.json';
import { FaSearch } from 'react-icons/fa';
import ArrowLeft from '../../../images/Faq/right.png';
import ArrowRight from '../../../images/Faq/left.png';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const FAQComponent = () => {
  const [value, setValue] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [sliderContent, setSliderContent] = useState(data);

  const onChange = (event) => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    onSearch(searchTerm);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setStartIndex(0);

    const filteredData = data.filter((item) =>
      item.questions.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSliderContent(filteredData);
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 2 < sliderContent.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleCardClick = (card) => {
    setidx(card.idx)
    setSelectedCard(card);
    setIsPopupOpen(true);
    document.body.classList.add('popup-open');
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('popup-open');
  };

  const [idx, setidx] = useState ('');

  const Popup = () => {
    return (
      <div className='popup-container'>
        <div className="popup">
          <h3>{data[idx].questions}</h3>
          <p>{data[idx].answer}</p>
          <div className="button-container">
          <button className='close_button' onClick={handleClosePopup}>Close</button>
          <div className="arrow-container">
            <button
              className="arrow left-arrow"
              onClick={() => {
                setidx((idx - 1 + data.length) % data.length);
              }}
            >
              <img src= {ArrowLeft} />
            </button>
            <button
              className="arrow right-arrow"
              onClick={() => {
                setidx((idx + 1) % data.length);
              }}
            >
              <img src= {ArrowRight} />
            </button>
            </div>
          </div>
        </div>
        <div className="overlay" onClick={handleClosePopup}></div>
      </div>
    );
  };
  

  return (
    <div className="faq_section_search">      
      <div className="faq-section">
      <Slide bottom>
        <p>Ask Us Anything</p>
        <h1>Have any questions? We are here to assist you.</h1>
        <div className="search-container">
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search here"
            className="search-bar"
          />
          <button onClick={() => onSearch(value)} className="button">
            <FaSearch />
          </button>
        </div>
        </Slide>
      </div>      
      <div className="slider">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <img src= {ArrowLeft} />
        </button>
        <Slide right>
        <div className="card-slider">
          {sliderContent.slice(startIndex, startIndex + 3).map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <h3>{item.questions}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        </Slide>
        <button className="arrow right-arrow" onClick={handleNext}>
          <img src= {ArrowRight} />
        </button>
      </div>
      <div className="container">
        <Zoom>
        <div className="box">
          <div className="left-content">
            <h2>Still have questions?</h2>
            <p>Can't find the answer you are looking for? Please chat with our friendly team.</p>
          </div>
          <div className="right-content">
            <button>Get in touch</button>
          </div>
        </div>
        </Zoom>
      </div>
      {isPopupOpen && <Popup card={selectedCard} />}
    </div>
  );
};

export default FAQComponent;
