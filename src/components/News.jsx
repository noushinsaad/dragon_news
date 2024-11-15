import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {

    const data = useLoaderData();
    const news = data.data[0]

    const {
        title,
        author,
        image_url,
        details,
    } = news;

    return (
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
                <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold text-gray-700">{author.name}</p>
                    <p className="text-xs text-gray-500">
                        {author.published_date ? author.published_date.split(' ')[0] : "unknown"}
                    </p>
                </div>
            </div>

            <div>
                <img src={image_url} alt={title} className="w-full h-[320px] object-cover rounded-lg mb-4 border-2" />
            </div>

            <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{details}</p>

            {/* <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating.number}</span>
                    <span className="ml-1">({rating.badge})</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div> */}

            <Link to={`/category/${news.category_id}`} className="btn flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md">
                <FaArrowLeft />
                All news in this category
            </Link>
        </div>
    );
};

export default News;