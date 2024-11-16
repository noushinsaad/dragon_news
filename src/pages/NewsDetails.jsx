import Header from "../components/Header";
import RightNav from "../components/layoutComponents/RightNav";
import News from "../components/News";

const NewsDetails = () => {



    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid md:grid-cols-4 gap-5">
                <section className="md:col-span-3">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <News></News>
                </section>
                <section className="md:col-span-1">
                    <RightNav></RightNav>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;