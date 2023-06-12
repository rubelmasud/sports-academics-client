

import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shered/Navber/Navbar";
import Footer from "../../Shered/Footer/Footer";


const DashboardLayout = () => {
    const [isAdmin] = useAdmin()
    // const [isInstructor] = useInstructor();
    // console.log('hello', isInstructor);
    const isInstructor = false
    // const isAdmin = false


    return (
        <div className="">
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open pt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-6">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-full shadow-lg bg-orange-100 border border-r-2 border-orange-400 ">
                        {
                            isAdmin ?
                                <>
                                    <NavLink to='dashboard/allusers' className={({ isActive }) => isActive ? "active" : "default"} > All User </NavLink>
                                    <NavLink to="dashboard/manageclass" className={({ isActive }) => isActive ? "active" : "default"} > Manage Classes </NavLink>
                                </>
                                : isInstructor ?
                                    <>
                                        <NavLink to="dashboard/addclass" className={({ isActive }) => isActive ? "active" : "default"} >Add Class </NavLink>
                                        <NavLink to="dashboard/addededclasses" className={({ isActive }) => isActive ? "active" : "default"} >My Add classes </NavLink>
                                    </>
                                    : <>
                                        <NavLink to="dashboard/selectedclass" className={({ isActive }) => isActive ? "active" : "default"} > My Selected Class </NavLink>
                                    </>

                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;