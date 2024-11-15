import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


// {
//     "category_id": "01",
//         "category_name": "Breaking News"
// },

const LeftNavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="font-semibold mb-4">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map(category =>
                        <NavLink
                            to={`/category/${category.category_id}`}
                            className="btn"
                            key={category.category_id}>
                            {category.category_name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavBar;