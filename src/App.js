import logo from './logo.svg';
import './App.css';
import RoutesConfig from "./routes/RoutesConfig";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Notification from "./feature/share/Notification";
import {createTheme, ThemeProvider} from "@mui/material";
import createCache from '@emotion/cache';
import {CacheProvider} from "@emotion/react";
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';

function App() {
    const theme = createTheme({
        direction: 'rtl',
    });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    return (
        <div className="App">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <RoutesConfig/>
                    </BrowserRouter>
                    <Notification/>
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
}

export default App;
