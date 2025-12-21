import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import placeholder from '@/assets/GroovySittingDoodle.png'
import {useForm} from "react-hook-form";
import {type LoginFormData, loginSchema} from "@/common/schema/login.schema.ts";
import {zodResolver} from '@hookform/resolvers/zod';
import {Spinner} from "@/components/ui/spinner";
import {FieldSeparator} from '@/components/ui/field'
import GoogleLoginBtn from "@/views/login/components/google-login-btn.tsx";

interface LoginFormProps {
    className?: string;
    onSubmit: (data: LoginFormData) => void
}

export function LoginForm({
                              className,
                              onSubmit,
                              ...props
                          }: LoginFormProps) {


    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });



    const handleLoginByOauth=(code,type='GOOGLE')=>{
        console.log(code,type);
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">欢迎回来</h1>
                                <p className="text-muted-foreground text-balance">
                                    登录WesCatt Music
                                </p>
                            </div>
                            <Field>
                                <FieldLabel htmlFor="email">邮箱 <span className='text-red-500'>*</span></FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    {...register('email')}
                                />
                                <span className="error">{errors?.email?.message}</span>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">密码 <span
                                        className='text-red-500'>*</span></FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto text-[10px] text-sm underline-offset-2 hover:underline"
                                    >
                                        忘记你的密码了？
                                    </a>
                                </div>
                                <Input id="password" type="password" required {...register('password')}/>
                                <span className="error">{errors?.password?.message}</span>
                            </Field>
                            <Field>
                                <Button type="submit" disabled={isSubmitting}>
                                    {
                                        isSubmitting ? <>
                                            <Spinner className="size-3"/>
                                            <span>登录中...</span>
                                        </> : "登录"
                                    }
                                </Button>
                            </Field>
                            <FieldSeparator className={"!bg-transparent"}>Or continue with</FieldSeparator>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center justify-center'>
                                    <GoogleLoginBtn onLogin={handleLoginByOauth}/>
                                </div>
                                <FieldDescription className="text-center">
                                    还没有账号？ <a href="mailto:zzxcmdyx@163.com">请联系管理员！</a>
                                </FieldDescription>
                            </div>
                        </FieldGroup>
                    </form>
                    <div className="bg-muted relative hidden md:block">
                        <img
                            src={placeholder}
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover  dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                注意！本项目为学习用途，未经允许不可进行分发，转让，商用，允许了也不行😊。
            </FieldDescription>
        </div>
    )
}
