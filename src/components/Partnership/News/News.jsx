import React, { useEffect, useState } from "react";
import "./news.css";
import { FaQuoteLeft } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import { Link, useNavigate } from "react-router-dom";

const News = () => {
  const [currNews, setCurrNews] = useState(0);
  const navigate = useNavigate();

  const newsData = [
    {
      heroImg:
        "https://images.unsplash.com/photo-1687201364205-6ec23f194c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      heading: "From Layoff to Entrepreneurial Triumph",
      newsContent:
        "A UK Man's Emotional Journey to Entrepreneurial Success with CraftIndika's CraftPartner Program.",
      introduction:
        "Are you searching for the best partnership opportunity in the handicraft industry? Look no further! In this blog post, we'll take you on a captivating and emotional journey of John, a UK-based individual who faced recent layoffs and turned his life around by successfully establishing a handicraft business using CraftIndika's CraftPartner Program. With their support and services, John achieved an impressive return on investment and discovered the perfect venture in the world of arts and crafts.",
      caseStudies: [
        {
          heading: "A Life-Changing Decision: The Path to Entrepreneurship",
          content:
            "After being laid off from his job, John (Original Name is Concealed to Protect Privacy of our Partner) found himself at a crossroads. Feeling lost and overwhelmed, he decided to pursue his dream of becoming an entrepreneur. He spent days and nights researching various industries and opportunities, searching for the perfect business venture. Little did he know that his passion for entrepreneurship would lead him to discover the captivating world of Indian handicrafts.",
          imgLink: "",
        },
        {},
      ],
    },
    {
      newsContent:
        "Unleashing the Power Within: An American Woman's Inspiring Journey from Grief to Entrepreneurial Success and Environmental Change with CraftIndika's CraftPartner Program.",
    },
    {
      newsContent:
        "A Lifesaving Gift of Love: A UAE Father's Failing Business Resurrected by a Thriving Handicraft Venture with CraftIndika's CraftPartner Program.",
    },
    {
      newsContent:
        "United by Craft: An Indian Student's Group Achieves Business Success in Germany with CraftIndika's CraftPartner Program.",
    },
  ];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrNews((currNews + 1) % 4);
    }, 8000);

    return () => clearTimeout(timeOut);
  }, [currNews]);

  const handleBlogClick = () => {
    navigate("/blog", { state: newsData[currNews] });
  };

  return (
    <div className="news">
      <Zoom>
        <div
          onClick={() => handleBlogClick()}
          className={currNews === 0 ? "news_box active" : "news_box"}
        >
          <h1>
            <span className="quote">
              <FaQuoteLeft />
            </span>
            {/* <span>{newsData[currNews].newsContent.split(":")[0]}</span>
            {newsData[currNews].newsContent.split(":")[1]} */}
            <span>{newsData[currNews].heading}{newsData[currNews].newsContent}</span>
          </h1>
          <Link to="/blog-page">Read now</Link>
        </div>
      </Zoom>
      <Zoom>
        <div className="news_pagination">
          {newsData.map((data, i) => (
            <p
              key={i}
              onClick={() => setCurrNews(i)}
              className={
                i === currNews
                  ? "news_pagination_active"
                  : "news_pagination_notactive"
              }
            >
              {i + 1}
            </p>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default News;
