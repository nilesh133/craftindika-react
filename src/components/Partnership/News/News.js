import React, { useEffect, useState } from 'react';
import "./news.css"

const News = () => {
    const [currNews, setCurrNews] = useState(0);

    const newsData = [
        {
            newsContent: "Absolutely delighted with the exquisite Dhokra Metal creation I acquired from CraftIndika",
        },
        {
            newsContent: "I noticed I asked you for a deliverable on this key project by the end of last week. I still",
        },
        {
            newsContent: "Absolutely delighted with the exquisite Dhokra Metal creation I acquired from CraftIndika",
        },
        {
            newsContent: "I noticed I asked you for a deliverable on this key project by the end of last week. I stillthis deliverable and wanted to follow up.",
        }
    ]

    useEffect(() => {
        console.log("Entered")
        const timeOut = setTimeout(() => {
            setCurrNews((currNews + 1) % 4)
        }, 8000)

        return () => clearTimeout(timeOut)
    }, [currNews])

    return (
        <div className='news'>
            <div className='news_box'>
                <h3>
                    {newsData[currNews].newsContent}
                </h3>
                <a href="#">Read more</a>
            </div>
            <div className='news_pagination'>
                {
                    newsData.map((data, i) => (
                        <p onClick={() =>
                            setCurrNews(i)
                        } className={i === currNews ? "news_pagination_active" : "news_pagination_notactive"}>{i + 1}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default News