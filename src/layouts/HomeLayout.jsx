import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/layoutComponents/LeftNavBar";
import RightNav from "../components/layoutComponents/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-4 gap-4">
                <aside className="md:col-span-1 p-2">
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className="md:col-span-2"><Outlet></Outlet></section>
                <aside className="md:col-span-1 p-2">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;