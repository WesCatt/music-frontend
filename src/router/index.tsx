import {createBrowserRouter} from "react-router";
import {lazy} from "react";

const BaseLayout = lazy(() => import("../layouts/base-layout.tsx"))

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
    }
]);


export default router;