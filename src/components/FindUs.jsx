import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us on</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item md:justify-start">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn join-item md:justify-start">
                    <BsTwitterX></BsTwitterX> Twitter
                </button>
                <button className="btn join-item md:justify-start">
                    <BsInstagram></BsInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;