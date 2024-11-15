import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-red-500 text-white px-3 py-2">Latest</p>
            <Marquee className="space-x-10" pauseOnHover={true}>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
                    repellat est cupiditate, odit commodi eos distinctio provident vero.
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
                    repellat est cupiditate, odit commodi eos distinctio provident vero.
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
                    repellat est cupiditate, odit commodi eos distinctio provident vero.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;