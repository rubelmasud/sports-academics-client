import { Outlet } from "react-router-dom/dist";
import Navbar from "../../Shered/Navber/Navbar";
import Footer from "../../Shered/Footer/Footer";
import { useState } from "react";
import './MainLayout.css'


const MainLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className="pt-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
