import z from 'zod';

export const loginSchema = z.object({
    email: z.email('格式不正确，请检查邮箱格式').min(1, '邮箱不得为空！'),
    password: z.string().min(8, '密码至少8个长度到16个长度').max(16, '密码至少8个长度到16个长度').regex(/^[A-Za-z0-9\-./]+$/,{
        error:'密码只能包含字母、数字、-、.、/ 这些字符'
    }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
