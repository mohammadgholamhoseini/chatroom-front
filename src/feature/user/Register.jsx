import React from "react";
import {useDispatch} from "react-redux";
import {register} from "./userSlice";
import registerImage from '../../assets/images/social-network-app.png';

export default function () {
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
    })
    const changeHandler = (event) => {
        setUser(prevState => {
            const {name, value, type, checked} = event.target
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }
    const registerUser =(e)=>{
        e.preventDefault();
        dispatch(register(user))
    }
    return (
        <div>
            <section className="vh-100 register-section">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
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
                                        <div
                                            className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p
                                                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ثبت نام</p>

                                            <form className="mx-1 mx-md-4">

                                                <div
                                                    className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            placeholder="نام کاربری شما"
                                                            className="form-control"
                                                            name='username'
                                                            value={user.username}
                                                            onChange={changeHandler}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            placeholder="ایمیل شما"
                                                            className="form-control"
                                                            name='email'
                                                            value={user.email}
                                                            onChange={changeHandler}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            placeholder="رمزعبور"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            name='password'
                                                            value={user.password}
                                                            onChange={changeHandler}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password"
                                                               id="form3Example4cd"
                                                               placeholder="تکرار رمز عبور"
                                                               className="form-control"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input m-lg-1 m-3"
                                                        type="checkbox"
                                                        value=""
                                                        id="form2Example3c"/>
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="form2Example3">من با
                                                        تمام قوانین موافقم <a
                                                            href="#!">قوانین و مقررات</a></label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-lg w-100"
                                                        onClick={registerUser}
                                                    >ثبت
                                                        نام
                                                    </button>
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