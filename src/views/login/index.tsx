import {LoginForm} from "@/views/login/components/login-form.tsx";
import type {LoginFormData} from "@/common/schema/login.schema.ts";
import {login} from "@/common/api/auth.ts";
import {save} from '@/common/store/authSlice.ts'
import {useDispatch, useSelector} from "react-redux";
import {toast} from "sonner";
import {formatDate} from "@/common/utils/tools.ts";
import type {RootState} from "@/common/store";
import {useEffect} from "react";
import {useNavigate} from "react-router";

const Login = () => {
    const user = useSelector((state: RootState) => state.auth.value);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // 处理登录逻辑
    const handleSubmit = (data: LoginFormData) => {
        // 返回Promise
        return new Promise<void>(resolve => {
            login(data).then(res => {
                // 保存用户信息
                dispatch(save(res.data));
                toast("登陆成功！", {
                    description: `${formatDate(new Date())}`,
                    position: "top-center",
                    action: {
                        label: "知晓",
                        onClick: () => console.log("知晓"),
                    },
                });
            }).finally(() => {
                resolve();
            })
        });
    }

    const handleGoogleLogin = (code: string, type = 'GOOGLE') => {
        console.log(code, type);
    }


    useEffect(() => {
        if (!user) return;
        navigate('/', {replace: true});
    }, [navigate, user]);


    return (
        <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm opacity-90  md:max-w-4xl relative z-20">
                <LoginForm onGoogleLogin={handleGoogleLogin} onSubmit={handleSubmit}/>
            </div>
        </div>
    )

}


export default Login;