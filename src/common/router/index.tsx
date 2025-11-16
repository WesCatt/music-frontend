import {createBrowserRouter} from "react-router";
import {lazy} from "react";

const BaseLayout = lazy(() => import("@/common/layouts/base-layout.tsx"))
const Recommend = lazy(() => import('@/views'))

// 页面路由
const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {
                path: "",
                element: <Recommend/>
            }
        ]
    }
]);


export default router;