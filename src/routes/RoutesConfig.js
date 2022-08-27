import Register from "../feature/user/Register";
import Login from "../feature/user/Login";
import {useRoutes} from "react-router-dom";
import React from "react";


export default function RoutesConfig() {
    let element = useRoutes([
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]);

    return element;
}