import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllUsers from "../Pages/Dashboard/AllUsers/Allusers";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AllClass from "../Pages/Dashboard/AllClass/AllClass";

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
        path: "dashboardLayout",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: 'allusers', element: <AllUsers /> },
            { path: 'allclass', element: <AllClass /> }
        ]
    }
]);

export default router