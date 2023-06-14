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
import StudentSelectedClass from "../Pages/DashBoard/UaerDashBoard/SrudentSelectedClass/StudentSelectedClass";
import DashboardHome from "../Pages/DashBoard/DashBoardHome/DashboardHome";
import AddClass from "../Pages/DashBoard/InstructorDashBoard/AddClass/AddClass";
import Payment from "../Pages/DashBoard/UaerDashBoard/Payment/Payment";
import AddededClasses from "../Pages/DashBoard/InstructorDashBoard/AddededClasses/AddededClasses";
import ManageClasses from "../Pages/DashBoard/AdminDashboard/ManageClasses/ManageClasses";
import EnrolledClasses from "../Pages/DashBoard/UaerDashBoard/EnrolledClasses/EnrolledClasses";

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

            // admin routes
            { path: 'dashboard/allusers', element: <AllUsers /> },
            { path: 'dashboard/manageclass', element: <ManageClasses /> },

            // Instructor routes
            { path: 'dashboard/addclass', element: <AddClass /> },
            { path: 'dashboard/addededclasses', element: <AddededClasses /> },

            // student route
            { path: 'dashboard/selectedclass', element: <StudentSelectedClass /> },

            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => <Payment id={params.id}></Payment>

            },
            {
                path: 'dashboard/enrolledclasses',
                element: <EnrolledClasses />,
            },

        ]
    }
]);

export default router