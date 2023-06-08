import { Outlet } from "react-router-dom";
import Navbar from "../../Shered/Navber/Navbar";
import Footer from "../../Shered/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;