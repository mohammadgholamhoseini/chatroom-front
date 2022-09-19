import Register from "../feature/user/Register";
import Login from "../feature/user/Login";
import Landing from "../feature/landing/Landing";
import {useRoutes} from "react-router-dom";
import React from "react";
import Main from "../feature/main/Main";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatRoom from "../feature/main/chatroom/ChatRoom";
import {useSelector} from "react-redux";
import {userState} from "../feature/user/userSlice";
import {getToken} from "../data/localStorage";

export const routesItem = [
    {
        path: "",
        element: checks(false,<Landing/>),
        title: "",
        icon: "",
    },
    {
        path: "/register",
        element: checks(false,<Register/>),
        title: "",
        icon: "",
    },
    {
        path: "/login",
        element: checks(false,<Login/>),
        title: "",
        icon: "",
    },
    {
        path: "/main",
        element: checks(true,<Main/>),
        title: "",
        icon: "",
    },
    {
        path: "/chatRoom",
        element: checks(true,<Main Component={ChatRoom}/>),
        title: "اتاق گفت و گو",
        icon: <QuestionAnswerIcon color="primary"/>,
    },
]
function checks(needLogin,component){
    if (needLogin)
        return !!getToken() ? component : <Login/>
    return component;
}
export default function RoutesConfig() {
    return useRoutes(routesItem);
}