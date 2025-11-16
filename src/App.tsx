import {RouterProvider} from "react-router/dom";
import router from "@/common/router";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getProfile} from "@/common/api/auth.ts";

const App = () => {
    const user = useSelector((state) => state.auth.value);

    useEffect(() => {
        if (!user) return;
        getProfile().then(() => {

        }).catch((e) => {

        });
    }, []);


    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;