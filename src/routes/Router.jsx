import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout, DashboardLayout, AuthLayout } from "../layouts/index";

import { 
    Landing, ErrorPage, NotFoundPage, Login, Overview
} from "../pages/index";

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: [
            // 1) Main
            {
                path: "/",
                element: <MainLayout/>,
                children: [
                    { 
                        index: true, 
                        element: <Landing />
                    },
                ],
            },
            // 2) Auth
            {
                path: "/auth",
                element: <AuthLayout/>,
                children: [
                    { index: true, element: <Navigate to="login" replace /> },
                    { path: "login", element: <Login /> },
                ],
            },
            // 3) Dashboard
            {
                path: "/dashboard",
                element: 
                    <DashboardLayout/>
                ,
                children: [
                    { index: true, element: <Navigate to="overview" replace/> },
                    { path: "overview", element: <Overview /> },
                ],
            },
            // 4) Not Found
            {
                path: "*",
                element: <NotFoundPage/>,
            },
        ]
    }
]);

export default router;