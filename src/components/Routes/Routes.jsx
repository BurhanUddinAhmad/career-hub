import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Appliedjob from "../Appliedjob/Appliedjob";
import Blogs from "../Blogs/Blogs";
import Statistics from "../Statistics/Statistics";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appliedjob',
                element: <Appliedjob />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/statistics',
                element: <Statistics />
            }
        ]
    }
]);