import {configureStore} from "@reduxjs/toolkit";
import user from "../feature/user/userSlice";

export const store = configureStore({
    reducer: {
        userSlice: user
    }
})