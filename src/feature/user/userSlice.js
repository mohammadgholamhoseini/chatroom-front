import {createSlice} from "@reduxjs/toolkit";
import {loginUserApi, registerUserApi} from "../../data/api";
import {SUCCESS_CREATE, SUCCESS_LOGIN} from "../../data/messages";
import {errorMessage, successMessage} from "../../data/toastMessages";
import {getToken, saveToken} from "../../data/localStorage";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerAction: (state, action) => {
            state.user = action.payload
            console.log(state.user)
            registerUserApi(state.user).then(jsonResponse => {
                successMessage([SUCCESS_CREATE])
            }).catch(e => {
                    errorMessage(e)
                }
            )

        },
        loginAction: (state, action) => {
            console.log(action)
            state.user = action.payload
            loginUserApi(state.user).then(jsonResponse => {
                successMessage([SUCCESS_LOGIN])
                saveToken(jsonResponse.data);
            }).catch(e => {
                    errorMessage(e)
                }
            )

        },
        getLoginUserInfo: (state, action) => {

        }
    }
})

export const userState = (state) => state.userState;

export const {registerAction, loginAction} = userSlice.actions

export default userSlice.reducer