import {RouterProvider} from "react-router/dom";
import router from "@/common/router";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getProfile} from "@/common/api/auth.ts";
import type {RootState} from "@/common/store";

const App = () => {
    const user = useSelector((state: RootState) => state.auth.value);

    useEffect(() => {
        if (!user) return;
        getProfile().then(() => {

        });
    }, []);


    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;