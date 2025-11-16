import {LoginForm} from "@/views/login/components/login-form.tsx";
import type {LoginFormData} from "@/common/schema/login.schema.ts";
import {login} from "@/common/api/auth.ts";

const Login = () => {

    const handleSubmit = (data: LoginFormData) => {
        return new Promise<void>(resolve => {
            login(data).then(res => {
                console.log(res);
            }).finally(() => {
                resolve();
            })
        });
    }


    return (
        <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm opacity-90  md:max-w-4xl relative z-20">
                <LoginForm onSubmit={handleSubmit}/>
            </div>
        </div>
    )

}


export default Login;