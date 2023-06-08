
import Navbar from "../../Shered/Navber/Navbar";
import Footer from "../../Shered/Footer/Footer";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";


const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Dashboard />
            </div>
            <Footer />
        </>
    );
};

export default DashboardLayout;