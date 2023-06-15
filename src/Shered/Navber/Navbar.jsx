import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useSelectedClass from "../../Hooks/useSelectedClass";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {

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
        <div className="md:flex gap-4 items-center text-[16px]">

            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"} > Home </NavLink>
            </li>


            <li>
                <NavLink to="/instructors" className={({ isActive }) => isActive ? "active" : "default"}>Instructors </NavLink>
            </li>

            <li>

                <NavLink to="/classes" className={({ isActive }) => isActive ? "active" : "default"}>Classes </NavLink>
            </li>
            {
                user ?
                    <div className="md:flex items-center">

                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : "default"}>Dashboard </NavLink>
                        </li>

                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-center">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 ml-0s p-2 shadow bg-orange-100 menu menu-sm md:dropdown-content  rounded-box w-52">
                                    <li><button className="font-bold" onClick={handleLogOut}><BiLogOut className="w-6 h-6" /> Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <li>
                        <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login </NavLink>
                    </li>
            }


            {
                isAdmin || isInstructor ?
                    <></>
                    :

                    <NavLink >
                        <label tabIndex={0} className="btn  btn-circle text-black">
                            <div className="indicator ">
                                <AiOutlineShoppingCart className="w-6 h-6" />
                                <span className="badge badge-sm indicator-item bg-orange-300">{selectClass?.length}</span>
                            </div>
                        </label>
                    </NavLink>

            }


        </div>



    return (
        <div className="navbar fixed z-10 w-full  bg-base-200 ">
            <div className="navbar-start flex items-center ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content bg-base-50 mt-3 p-2 shadow bg-base-100  w-60">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <h1 className="font-bold md:text-3xl">Sports Academies</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu  px-1 items-center">
                    {menuItems}

                </ul>
            </div>
            <button
                className={`text-sm px-4 py-2 rounded focus:outline-none  ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                onClick={toggleDarkMode}
            >
                {isDarkMode ? <><BsToggleOn className="w-12 h-10" /></> : <><BsToggleOff className="w-12 h-10" /></>}
            </button>

        </div>
    );
};

export default Navbar;