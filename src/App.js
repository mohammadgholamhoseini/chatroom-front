import logo from './logo.svg';
import './App.css';
import RoutesConfig from "./routes/RoutesConfig";
import {BrowserRouter} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <RoutesConfig/>
            </BrowserRouter>

        </div>
    );
}

export default App;
