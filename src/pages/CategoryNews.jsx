import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    // console.log(news);
    return (
        <div className="p-3">
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <h2 className="opacity-65 text-sm mb-3">{news.length} News Found in This Category</h2>
            <div className="space-y-4">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;