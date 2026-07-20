import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import { lazy, Suspense } from 'react';

const Home = lazy(() => import("../pages/Home.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Error404 = lazy(() => import("../pages/Error404.jsx"));

const lazyLoad = (Component) => (
    <Suspense fallback={<p>Loading...</p>}>
        <Component />
    </Suspense>
)


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: lazyLoad(Home)
            }
        ]
    },
    {
        path: "/login",
        element: lazyLoad(Login),
        errorElement: <Error404/>
    }
])