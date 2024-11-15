import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // GETTING Form DATA
        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // const photo = e.target.photo.value;
        // const password = e.target.password.value;
        // console.log(name, email, photo, password)

        const form = new FormData(e.target);
        const name = form.get("name");

        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        if (password.length <= 6) {
            setError({ ...error, password: "must be 6 OR more than 6 characters long" });
            return
        }
        console.log({ name, email, photo, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err)
                    })
                // console.log(user);
            })
            .catch(err => {
                setError({ ...error, register: err.code })
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="font-bold text-2xl text-center pt-4">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    {
                        error.password && <label className="label text-xs text-red-500">
                            {error.password}
                        </label>
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already Have An Account?
                    <Link to="/auth/login"><span className="text-red-500"> Login</span></Link> </p>
            </div>
        </div>
    );
};

export default Register;