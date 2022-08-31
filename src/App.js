import logo from './logo.svg';
import './App.css';
import RoutesConfig from "./routes/RoutesConfig";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Notification from "./feature/share/Notification";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <RoutesConfig/>
            </BrowserRouter>
        <Notification/>
        </div>
    );
}

export default App;
