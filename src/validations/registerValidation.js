import * as yup from "yup";
export const registerValidation = yup.object({
    username: yup.string().required("نام کاربری الزامی است") ,
    email: yup.string().email("ایمیل صحیح نمی باشد").required("ایمیل الزامیست") ,
    password: yup.string().min(4,"کلمه عبور باید حداقل 4 کارکتر باشد").required("کلمه عبور الزامیست"),
    confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'کلمات عبور همخوانی ندارند'),
    isConfirm:yup.boolean().oneOf([true], 'این فیلد الزامیست'),
}).required()