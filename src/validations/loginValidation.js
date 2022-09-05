import * as yup from "yup";

export const loginValidation = yup.object({
    username: yup.string().required("نام کاربری الزامی است") ,
    password: yup.string().required("کلمه عبور الزامیست"),
}).required()