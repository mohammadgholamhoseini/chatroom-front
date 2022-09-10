import Register from "../feature/user/Register";
import Login from "../feature/user/Login";
import Landing from "../feature/landing/Landing";
import {useRoutes} from "react-router-dom";
import React from "react";
import Main from "../feature/main/Main";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatRooms from "../feature/main/chatrooms/ChatRooms";


class Chatrooms extends React.Component<{}> {
    render() {
        return null;
    }
}
export const routesItem = [
    {
        path: "",
        element: <Landing/>,
        title:"",
        icon: ""
    },
    {
        path: "/register",
        element: <Register/>,
        title:"",
        icon: ""
    },
    {
        path: "/login",
        element: <Login/>,
        title:"",
        icon: ""
    },
    {
        path: "/main",
        element: <Main/>,
        title:"",
        icon: ""
    },
    {
        path: "/chatRooms",
        element: <ChatRooms/>,
        title:"اتاق های گفت و گو",
            icon: <QuestionAnswerIcon color="primary"/>
    },
]

export default function RoutesConfig() {
    let element = useRoutes(routesItem);

    return element;
}