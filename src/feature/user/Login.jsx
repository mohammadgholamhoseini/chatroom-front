import React from "react";
import {useDispatch} from "react-redux";
import {loginAction} from "./userSlice";
import loginImage from '../../assets/images/login.jpg';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginValidation} from "../../validations/loginValidation";
import { useNavigate } from "react-router-dom";

export default function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginValidation)
    });
    const changeHandler = (event) => {
        setLogin(prevState => {

            const {name, value, type, checked} = event.target
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }
    const loginUser = (e,event) => {
        event.preventDefault();
        dispatch(loginAction(login))
        navigate("/")
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
                                                src={loginImage}
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p
                                                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ورود</p>

                                            <form onSubmit={handleSubmit(loginUser)} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            placeholder="نام کاربری"
                                                            className={errors.username ? 'form-control border border-danger' : 'form-control'}
                                                            {...register("username")}
                                                            name='username'
                                                            value={login.username}
                                                            onChange={changeHandler}
                                                        />
                                                        <span
                                                            className='text-danger'>{errors.username && errors.username.message}</span>
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
                                                            value={login.password}
                                                            onChange={changeHandler}
                                                        />
                                                        <span
                                                            className='text-danger'>{errors.password && errors.password.message}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-primary btn-lg w-100"
                                                        value="ورود"
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