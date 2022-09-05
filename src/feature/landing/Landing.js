import React from "react";
import baseImage from '../../assets/images/base.png'
export default function Landing(){
    return(
        <div>
            <section id="hero-animated" className="hero-animated d-flex align-items-center">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
                    <img src={baseImage} className="img-fluid animated"/>
                        <h2>به <span>واژه</span> خوش آمدید</h2>
                        <p>ما اینجا جمع شدیم تا ساعاتی خوش با یک دیگر داشته باشیم</p>
                        <div className="d-flex">
                            <a href="/login" className="btn-get-started scrollto">ورود</a>
                            <a href="/register" className="btn-register"> <span>ثبت نام</span> </a>
                        </div>
                </div>
            </section>
        </div>
    )

}