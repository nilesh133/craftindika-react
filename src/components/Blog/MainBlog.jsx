import React, { useState, useEffect } from "react";
import "./mainblog.css";
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import blogData from "./blogData.json";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

const MainBlog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState("");
  const [sliderContent, setSliderContent] = useState([]);

  const onChange = (event) => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    onSearch(searchTerm);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);

    const filteredData = blogData.filter((content) =>
      content.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSliderContent(filteredData);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSliderContent(blogData);
  }, []);

  return (
    <>
      <div
        className={`blog_section_search ${showContent ? "show" : ""}`}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <nav className={`blog_nav ${isMenuOpen ? "open" : ""}`}>
          <div className="blog_nav_logo">
            <h3>CRAFTINDIKA ©</h3>
          </div>
          <div className="blog_menu_button" onClick={handleMenuToggle}>
            <div className={`blog_menu_icon ${isMenuOpen ? "open" : ""}`}>
              <span
                style={{
                  transform: isMenuOpen ? "translateY(8px)" : "translateY(0)",
                  transformOrigin: "top",
                }}
              ></span>
              <span
                style={{
                  transform: isMenuOpen ? "scaleX(0)" : "scaleX(1)",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              ></span>
              <span
                style={{
                  transform: isMenuOpen ? "translateY(-8px)" : "translateY(0)",
                  transformOrigin: "bottom",
                }}
              ></span>
            </div>
          </div>
          <ul className={`blog_menu_items ${isMenuOpen ? "open" : ""}`}>
            <li>Company</li>
            <li>Collections</li>
            <li>Curations</li>
            <li>CraftPartner</li>
            <li>Connect</li>
          </ul>
        </nav>
        <div className="blog_section">
          <p>Resources</p>
          <h1>Unlocking Knowledge: Happy Reading and Exploring!</h1>
          <div className="search_container">
            <input
              type="text"
              placeholder="Search here"
              className="search_bar"
              value={value}
              onChange={onChange}
            />
            <button className="search_button">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="main_blog_carousel">
        <div className="carousel">
          <Swiper
            slidesPerView={windowWidth <= 600 ? 1 : 2}
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="blogSwiper"
          >
            {sliderContent.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="blog_box">
                  <article className="blog_page_content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <button className="read_more_button">Read More &gt;&gt;</button>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainBlog;
