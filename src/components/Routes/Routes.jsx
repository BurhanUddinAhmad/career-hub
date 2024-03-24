import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Appliedjob from "../Appliedjob/Appliedjob";
import Blogs from "../Blogs/Blogs";
import Statistics from "../Statistics/Statistics";
import JobDetails from "../JobDetails/JobDetails";


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
                element: <Appliedjob />,
                loader: fetch('/jobs.json')
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: () => fetch('../jobs.json')
            }
        ]
    }
]);