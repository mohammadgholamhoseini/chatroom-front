import Register from "../components/Register";
import Login from "../components/Login";
import {useRoutes} from "react-router-dom";

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