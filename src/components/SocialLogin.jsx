import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";


const SocialLogin = () => {
    const { setUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }

    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <div onClick={handleGoogleSignIn} className="btn"><FaGoogle /> Login with Google</div>
                <div onClick={handleGithubSignIn} className="btn"><FaGithub /> Login with Github</div>
            </div>
        </div>
    );
};

export default SocialLogin;