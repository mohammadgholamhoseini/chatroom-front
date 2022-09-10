import React from "react";
import baseImage from '../../assets/images/base.png'
import {Grid, Typography} from "@mui/material";

export default function Landing() {
    return (
        <div>
            <Grid id="hero-animated" className="hero-animated landing-main">
                <Grid
                    className="landing-content"
                    data-aos="zoom-out" >
                    <img src={baseImage} className="img-fluid animated"/>
                    <h2>به <span>واژه</span> خوش آمدید</h2>
                    <Typography>ما اینجا جمع شدیم تا ساعاتی خوش با یک دیگر داشته باشیم</Typography>
                    <div>
                        <a href="/login" className="btn-get-started scrollto">ورود</a>
                        <a href="/register" className="btn-register"> <span>ثبت نام</span> </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}