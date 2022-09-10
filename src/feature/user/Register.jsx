import React from "react";
import {useDispatch} from "react-redux";
import {registerAction} from "./userSlice";
import registerImage from '../../assets/images/social-network-app.png';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerValidation} from "../../validations/registerValidation";
import {useNavigate} from "react-router-dom";
import {
    Avatar,
    Box, Button,
    Checkbox,
    CssBaseline,
    FormControlLabel, FormHelperText,
    Grid, Link,
    TextField,
    Typography
} from "@mui/material";

class LockOutlinedIcon extends React.Component {
    render() {
        return null;
    }
}

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
    const registerUser = (e, event) => {
        event.preventDefault();
        console.log(user)
        dispatch(registerAction(user))
        navigate("/login");
    }
    return (
        <div className="App-register">
            <Grid container component="main">
                <CssBaseline/>
                <Grid item xs={12} sm={7} md={7} className="registerImageGrid">
                    <Box>
                        <img src={registerImage} className="registerImage" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className="registerFormGrid">
                    <Box>
                        <Typography textAlign='center' component="h1" variant="h5">
                            ثبت نام
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(registerUser)} sx={{mt: 1}} dir='rtl'>
                            <div dir='rtl'>
                                <TextField
                                    margin="normal"
                                    size="small"
                                    required
                                    fullWidth
                                    id="username"
                                    label="نام کاربری"
                                    autoComplete="username"
                                    autoFocus
                                    {...register("username")}
                                    name='username'
                                    value={user.username}
                                    onChange={changeHandler}
                                    helperText={errors.username && errors.username.message}
                                    error={errors.username && true}

                                />
                                <TextField
                                    margin="normal"
                                    size="small"
                                    required
                                    fullWidth
                                    id="email"
                                    label="ایمیل"
                                    autoComplete="email"
                                    autoFocus
                                    {...register("email")}
                                    name='email'
                                    value={user.email}
                                    onChange={changeHandler}
                                    helperText={errors.email && errors.email.message}
                                    error={errors.email && true}
                                />
                                <TextField
                                    margin="normal"
                                    size="small"
                                    required
                                    fullWidth
                                    label="کلمه عبور"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    color="info"
                                    {...register("password")}
                                    name='password'
                                    value={user.password}
                                    onChange={changeHandler}
                                    helperText={errors.password && errors.password.message}
                                    error={errors.password && true}
                                />
                                <TextField
                                    margin="normal"
                                    size="small"
                                    required
                                    fullWidth
                                    label="تایید کلمه عبور"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    color="info"
                                    {...register("confirmPassword")}
                                    name='confirmPassword'
                                    value={user.confirmPassword}
                                    onChange={changeHandler}
                                    helperText={errors.confirmPassword && errors.confirmPassword.message}
                                    error={errors.confirmPassword && true}
                                />
                            </div>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...register("isConfirm")}
                                        name='isConfirm'
                                        value={user.isConfirm}
                                        onChange={changeHandler}
                                        error={errors.isConfirm && true}
                                        sx={errors.isConfirm ?{color:'#DF6464'} : ""}/>
                                }
                                className="checkboxLabel"
                                label="من با تمام قوانین و مقررات موافقم"
                            />
                            <FormHelperText sx={{color:'#DF6464',margin:"-5px 0 0 17px"}}>{errors.isConfirm && errors.isConfirm.message}</FormHelperText>
                            <Link href="#" variant="body2">
                                قوانین و مقررات
                            </Link>
                            <Button type="submit" variant="contained"  fullWidth >ثبت نام</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}