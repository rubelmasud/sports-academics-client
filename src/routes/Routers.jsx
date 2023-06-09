import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Admin from "../Pages/DashBoard/AdminDashboard/Admin/Admin";
import AllClass from "../Pages/DashBoard/AdminDashboard/AllClass/AllClass";
import AllUsers from "../Pages/DashBoard/AdminDashboard/AllUsers/AllUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/instructors', element: <Instructors /> },
            { path: '/classes', element: <Classes /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: 'dashboard', element: <Admin /> },
            { path: 'alluser', element: <AllUsers /> },
            { path: 'allclass', element: <AllClass /> }
        ]
    }
]);

export default router