import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const { userLogin, setUser, forgotPassword } = useContext(AuthContext);
    const [error, setError] = useState({})
    const emailRef = useRef();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
                // console.log(user);
            })
            .catch(err => {
                setError({ ...error, login: err.code })
            })
    }


    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Please enter a email address")
        }
        else {
            forgotPassword(email)
                .then(() => {
                    alert("Reset email sent to", email, ", please check your email");
                })
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="font-bold text-2xl text-center pt-4">Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        {
                            error.login &&
                            <label className="label text-sm text-red-500">
                                {error.login}
                            </label>
                        }

                        <label onClick={handleForgotPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Don’t Have An Account? <Link to="/auth/register"><span className="text-red-500">Register</span></Link> </p>
            </div>
        </div>
    );
};

export default Login;