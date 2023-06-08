import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    console.log("uigoutcucu", user);

    const isAdmin = true
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content   w-11/12  mx-auto">
                {/* Page content here */}

                <div className="mt-4">
                    <Outlet />
                </div>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className=" drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  bg-orange-100 text-base-content border shadow-md border-r-2 border-orange-600 h-full">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>

                            <Link to='allusers'>All Users</Link>
                            <Link to='allclass'>All class</Link>
                        </> :
                            <>   <li><a>Student</a></li>
                                <li><a>Instector</a></li>
                            </>
                    }




                </ul>

            </div>
        </div>
    );
};

export default Dashboard;