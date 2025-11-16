import {createBrowserRouter} from "react-router";
import {lazy} from "react";
import {AuthGuard} from "@/components/AuthGuard.tsx";

const BaseLayout = lazy(() => import("@/common/layouts/base-layout.tsx"))
const Recommend = lazy(() => import('@/views'))
const Login = lazy(() => import('@/views/login'))
// 页面路由
const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthGuard role='USER'><BaseLayout/></AuthGuard>,
        children: [
            {
                path: "",
                element: <Recommend/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>,
    }
]);


export default router;