import { Link } from "react-router-dom";
import userLogo from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Career</Link></li>
    </>

    return (
        <div className="flex justify-between">

            <div></div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl">
                        {/* User Name */}
                        {user && user?.displayName}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div>
                        {
                            user && user.photoURL ? <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" /> : <img src={userLogo} alt="" />
                        }

                    </div>
                    {
                        user && user?.email ?
                            <button onClick={logOut} className="btn btn-neutral">Log out</button> :
                            <Link to='/auth/login' className="btn btn-neutral">Login</Link>
                    }

                    {/* <Link to='/auth/login' className="btn btn-neutral">Login</Link> */}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;