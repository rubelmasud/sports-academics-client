
import { NavLink, Outlet } from "react-router-dom";

const Drawer = () => {


    const isInstructor = false
    const isUser = false
    const isAdmin = true

    return (
        <div className="drawer lg:drawer-open pt-20">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-6">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full shadow-lg bg-orange-100 border border-r-2 border-orange-400 ">
                    {
                        isAdmin ?
                            <>

                                <NavLink to="alluser" className={({ isActive }) => isActive ? "active" : ""} > All Users </NavLink>


                                <NavLink to="allclass" className={({ isActive }) => isActive ? "active" : ""} > All Class </NavLink>


                            </>
                            :
                            <></>
                    }
                    {
                        isUser ?
                            <>
                                isUser
                            </>
                            :
                            <></>
                    }
                    {
                        isInstructor ?
                            <>
                                isInstructor
                            </>
                            :
                            <></>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Drawer;