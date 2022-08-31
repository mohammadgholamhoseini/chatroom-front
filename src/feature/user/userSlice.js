import {createSlice} from "@reduxjs/toolkit";
import {registerUserApi} from "../../data/api";

import Notification from "../share/Notification";
import {toast} from "react-toastify";

const initialState = {
    user: {
        username: "",
        email: "",
        password: ""
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload
            registerUserApi(state.user).then(jsonResponse => {
                toast.success("با موفقیت انجام شد")
            })

        }
    }
})
export const {register} = userSlice.actions

export default userSlice.reducer