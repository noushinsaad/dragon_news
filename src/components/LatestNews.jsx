import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [news, setNews] = useState([]);

    fetch("https://openapi.programming-hero.com/api/news/category/01")
        .then(res => res.json())
        .then(data => setNews(data.data));

    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-red-500 text-white px-3 py-2">Latest</p>
            <Marquee className="space-x-10" pauseOnHover={true}>

                {
                    news.map(item => (
                        <div className="ml-4" key={item._id}>
                            <Link to={`/news/${item._id}`}>
                                {item.title}
                            </Link>
                        </div>
                    ))
                }

            </Marquee>
        </div>
    );
};

export default LatestNews;