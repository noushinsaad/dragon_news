import { AiFillStar } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const { news } = props || {};

    const {
        title,
        author,
        image_url,
        total_view,
        rating,
        details,
    } = news;

    return (
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden space-y-4">
            {/* Author and Date */}
            <div className="flex items-center bg-gray-200 p-4">
                <img className="w-10 h-10 rounded-full" src={author.img} alt={author.name} />
                <div className="ml-3">
                    <p className="text-sm font-bold">{author.name}</p>
                    <p className="text-xs text-gray-500">{author.published_date ? author.published_date.split(' ')[0] : "unknown"}</p>
                </div>
                <div className="flex ml-auto text-gray-500">
                    <CiBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Thumbnail */}
            <div className='p-2'>
                <img className="w-full h-48 object-cover border-2 rounded-lg" src={image_url} alt={title} />
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-500 text-sm mt-2">{details.slice(0, 100)}...
                    <Link to={`/news/${news._id}`} className="text-blue-500">Read More</Link></p>
            </div>

            {/* Rating and Views */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <AiFillStar
                            key={i}
                            className={`text-yellow-500 
                                0${i < Math.round(rating.number) ? "" : "opacity-50"}`
                            }
                        ></AiFillStar>
                    ))}
                    <span className='ml-2 font-semibold'>{rating.number}</span>
                    {/* <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{rating.number}</span>
                    <span className="text-sm text-gray-500 ml-1">({rating.badge})</span> */}
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye className="mr-1" />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};
export default NewsCard;