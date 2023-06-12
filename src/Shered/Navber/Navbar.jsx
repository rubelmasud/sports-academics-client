import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useSelectedClass from "../../Hooks/useSelectedClass";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Navbar = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [selectClass] = useSelectedClass()
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User Log Out Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const menuItems =
        <div className="flex gap-4 items-center text-[16px]">

            <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"} > Home </NavLink>


            <NavLink to="/instructors" className={({ isActive }) => isActive ? "active" : "default"}>Instructors </NavLink>


            <NavLink to="/classes" className={({ isActive }) => isActive ? "active" : "default"}>Classes </NavLink>

            {
                isAdmin || isInstructor ?
                    <></>
                    :
                    <>
                        <NavLink to="" className={({ isActive }) => isActive ? "active" : "default"}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator ">
                                    <AiOutlineShoppingCart className="w-6 h-6" />
                                    <span className="badge badge-sm indicator-item bg-orange-300">{selectClass?.length}</span>
                                </div>
                            </label>
                        </NavLink>
                    </>
            }


            {
                user ?
                    <div className="flex items-center">

                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : "default"}>Dashboard </NavLink>

                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-center">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 ml-0s p-2 shadow menu menu-sm md:dropdown-content bg-base-100 rounded-box w-52">
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :


                    <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login </NavLink>


            }

        </div>



    return (
        <div className="navbar fixed z-10 w-full  bg-base-200 ">
            <div className="navbar-start flex items-center ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <h1 className="font-bold md:text-3xl">Sports Academies</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 items-center">
                    {menuItems}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;