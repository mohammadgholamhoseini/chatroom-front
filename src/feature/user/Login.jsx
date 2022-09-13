import React from "react";
import {useDispatch} from "react-redux";
import {loginAction} from "./userSlice";
import loginImage from '../../assets/images/login.jpg';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginValidation} from "../../validations/loginValidation";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    CssBaseline,
    Grid, Link,
    TextField,
    Typography
} from "@mui/material";

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
        <div className="App-login">
            <Grid container component="main">
                <CssBaseline/>
                <Grid item xs={12} sm={7} md={7} className="loginImageGrid">
                    <Box>
                        <img src={loginImage} className="loginImage" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className="loginFormGrid">
                    <Box>
                        <Typography textAlign='center' component="h1" variant="h5">
                            ورود
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(loginUser)} sx={{mt: 1}} dir='rtl'>
                            <div dir='rtl'>
                                <TextField
                                    margin="normal"

                                    required
                                    fullWidth
                                    id="username"
                                    label="نام کاربری"
                                    autoComplete="username"
                                    autoFocus
                                    {...register("username")}
                                    name='username'
                                    value={login.username}
                                    onChange={changeHandler}
                                    helperText={errors.username && errors.username.message}
                                    error={errors.username && true}

                                />
                                <TextField
                                    margin="normal"

                                    required
                                    fullWidth
                                    label="کلمه عبور"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    color="info"
                                    {...register("password")}
                                    name='password'
                                    value={login.password}
                                    onChange={changeHandler}
                                    helperText={errors.password && errors.password.message}
                                    error={errors.password && true}
                                />
                            </div>
                            <Button type="submit" variant="contained" className="loginButton" fullWidth >ورود</Button>
                            <Grid>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        کلمه عبور خود را فراموش کرده اید؟
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        هنوز ثبت نام نکردید؟ ثبت نام
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}