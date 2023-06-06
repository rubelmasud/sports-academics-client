import { Outlet } from "react-router-dom";
import Navbar from "../../Shered/Navber/Navbar";
import Footer from "../../Shered/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;