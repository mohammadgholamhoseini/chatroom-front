import React from "react";
import {useDispatch} from "react-redux";
import {registerAction} from "./userSlice";
import registerImage from '../../assets/images/social-network-app.png';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerValidation} from "../../validations/registerValidation";
import { useNavigate } from "react-router-dom";

export default function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isConfirm: ""
    })
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: yupResolver(registerValidation)
    });
    const changeHandler = (event) => {
        setUser(prevState => {

            const {name, value, type, checked} = event.target
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }
    const registerUser = (e,event) => {
        event.preventDefault();
        dispatch(registerAction(user))
        navigate("/login");
    }
    return (
        <div>
            <section className="vh-100 register-section">
                <div className="container h-500">
                    <div className="row d-flex justify-content-center align-items-center h-500">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black register-card">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div
                                            className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src={registerImage}
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p
                                                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ثبت نام</p>

                                            <form onSubmit={handleSubmit(registerUser)} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            placeholder="نام کاربری شما"
                                                            className={errors.username ? 'form-control border border-danger' : 'form-control'}
                                                            {...register("username")}
                                                            name='username'
                                                            value={user.username}
                                                            onChange={changeHandler}
                                                        />
                                                        <span
                                                            className='text-danger'>{errors.username && errors.username.message}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type='email'
                                                            id="form3Example3c"
                                                            placeholder="ایمیل شما"
                                                            className={errors.email ? 'form-control border border-danger' : 'form-control'}
                                                            {...register("email")}
                                                            name='email'
                                                            value={user.email}
                                                            onChange={changeHandler}
                                                        />
                                                        <span
                                                            className='text-danger'>{errors.email && errors.email.message}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type='password'
                                                            id="form3Example3c"
                                                            placeholder="کلمه عبور شما"
                                                            className={errors.password ? 'form-control border border-danger' : 'form-control'}
                                                            {...register("password")}
                                                            name='password'
                                                            value={user.password}
                                                            onChange={changeHandler}
                                                        />
                                                        <span
                                                            className='text-danger'>{errors.password && errors.password.message}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type='password'
                                                            id="form3Example3c"
                                                            placeholder="تایید کلمه عبور"
                                                            className={errors.password ? 'form-control border border-danger' : 'form-control'}
                                                            {...register("confirmPassword")}
                                                            name='confirmPassword'
                                                            value={user.confirmPassword}
                                                            onChange={changeHandler}
                                                        />
                                                        <span className='text-danger'>{errors.confirmPassword && errors.confirmPassword.message}</span>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center">
                                                    <input
                                                        className={errors.password ? 'form-check-input m-lg-1 m-3 border border-danger' : 'form-check-input m-lg-1 m-3'}
                                                        type="checkbox"
                                                        id="form2Example3c"
                                                        {...register("isConfirm")}
                                                        name='isConfirm'
                                                        value={user.isConfirm}
                                                        onChange={changeHandler}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="form2Example3"
                                                    >من با تمام قوانین موافقم <a href="#!">قوانین و مقررات</a></label>
                                                </div>
                                                <div className="form-outline flex-fill mb-5 me-4">
                                                    <span className='text-danger mb-5'>{errors.isConfirm && errors.isConfirm.message}</span>
                                                </div>



                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-primary btn-lg w-100"
                                                        value="ثبت نام"
                                                    />
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}