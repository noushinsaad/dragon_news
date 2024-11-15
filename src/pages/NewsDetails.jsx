import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layoutComponents/RightNav";
import News from "../components/News";

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0]
    console.log(news)

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-4 gap-5">
                <section className="col-span-3">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <News></News>
                </section>
                <section className="col-span-1">
                    <RightNav></RightNav>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;