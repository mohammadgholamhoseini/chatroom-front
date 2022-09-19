import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice";
import chatMessageSlice from "../feature/main/chatroom/chatMessageSlice";

export const store = configureStore({
    reducer: {
        userState: userSlice,
        chatMessage: chatMessageSlice,
    }
})