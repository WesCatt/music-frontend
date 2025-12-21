import {type ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import type {RootState} from "@/common/store";

export const AuthGuard = ({children, role = 'USER'}: { children: ReactNode, role: "ADMIN" | "USER" }) => {
    const user = useSelector((state: RootState) => state.auth.value);
    const path = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user && path.pathname !== '/login') {
            navigate('/login');
            return;
        }
        if (user?.role === 'USER' && role === "ADMIN") {
            navigate('/');
        }
    }, [navigate, path.pathname, user, role]);

    return (
        children
    )
}