import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <div className="btn"><FaGoogle /> Login with Google</div>
                <div className="btn"><FaGithub /> Login with Github</div>
            </div>
        </div>
    );
};

export default SocialLogin;