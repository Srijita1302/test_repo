import React, { Suspense, lazy } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";

// Lazy load the Login component
const Login = lazy(() => import('../login/Login'));

function Routing() {
    // Define the router
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/login" replace />, // Redirect from '/' to '/login'
        },
        {
            path: '/login',
            element: (
                <Suspense fallback={<div>Loading Login...</div>}>
                    <Login />
                </Suspense>
            ), // Lazy-loaded Login component with fallback
        },
        {
            path: '*',
            element: <div>404 - Page Not Found</div>, // Handle unmatched routes
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Routing;
