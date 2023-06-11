import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/AdminDashboard/AllUsers/AllUsers";
import ManageUsers from "../Pages/DashBoard/AdminDashboard/ManageUsers/ManageUsers";
import StudentSelectedClass from "../Pages/DashBoard/UaerDashBoard/SrudentSelectedClass/StudentSelectedClass";
import DashboardHome from "../Pages/DashBoard/DashBoardHome/DashboardHome";
import AddClass from "../Pages/DashBoard/InstructorDashBoard/AddClass/AddClass";


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
            { path: '', element: <DashboardHome></DashboardHome> },
            { path: 'dashboard/allusers', element: <AllUsers /> },
            { path: 'dashboard/manageclass', element: <ManageUsers /> },
            { path: 'dashboard/selectedclass', element: <StudentSelectedClass /> },
            { path: 'dashboard/addclass', element: <AddClass /> },

        ]
    }
]);

export default router